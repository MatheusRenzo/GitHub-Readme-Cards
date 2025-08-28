#!/usr/bin/env node

/**
 * Script para testar a API GitHub Readme Cards em produção
 * Uso: node test-production.js [URL_BASE]
 * Exemplo: node test-production.js https://meu-projeto.vercel.app
 */

import axios from 'axios';

const BASE_URL = process.argv[2] || 'https://github-readme-stats.vercel.app';

console.log(`🧪 Testando API em: ${BASE_URL}\n`);

const tests = [
  {
    name: 'Rota Principal - Estatísticas',
    url: `${BASE_URL}/?username=MatheusRenzo&show_icons=true&theme=radical`,
    expected: 'SVG content'
  },
  {
    name: 'Rota de Linguagens - Layout Compacto',
    url: `${BASE_URL}/top-langs?username=MatheusRenzo&layout=compact&theme=radical`,
    expected: 'SVG content'
  },
  {
    name: 'Rota de Repositório',
    url: `${BASE_URL}/pin?repo=MatheusRenzo/GitHub-Readme-Cards&theme=merko`,
    expected: 'SVG content'
  },
  {
    name: 'Rota de Gist',
    url: `${BASE_URL}/gist?gist_id=1234567890abcdef&theme=gruvbox`,
    expected: 'SVG content'
  },
  {
    name: 'Rota WakaTime',
    url: `${BASE_URL}/wakatime?username=MatheusRenzo&theme=dark`,
    expected: 'SVG content'
  }
];

// Testes das novas rotas (só se for sua instância)
if (BASE_URL !== 'https://github-readme-stats.vercel.app') {
  tests.push(
    {
      name: 'Nova Rota /api',
      url: `${BASE_URL}/api`,
      expected: 'JSON content'
    },
    {
      name: 'Nova Rota /status/up',
      url: `${BASE_URL}/status/up`,
      expected: 'JSON content'
    },
    {
      name: 'Nova Rota /status/pat-info',
      url: `${BASE_URL}/status/pat-info`,
      expected: 'JSON content'
    }
  );
}

async function testEndpoint(test) {
  try {
    console.log(`🔍 Testando: ${test.name}`);
    console.log(`   URL: ${test.url}`);
    
    const startTime = Date.now();
    const response = await axios.get(test.url, {
      timeout: 10000,
      validateStatus: () => true // Aceita qualquer status
    });
    const endTime = Date.now();
    
    const duration = endTime - startTime;
    const status = response.status;
    const contentType = response.headers['content-type'] || 'unknown';
    const contentLength = response.data?.length || 0;
    
    // Verificar se é SVG ou JSON
    let result = '❌ FALHOU';
    if (test.expected === 'SVG content' && contentType.includes('svg')) {
      result = '✅ SVG OK';
    } else if (test.expected === 'JSON content' && contentType.includes('json')) {
      result = '✅ JSON OK';
    } else if (status === 200 && contentLength > 0) {
      result = '⚠️ FUNCIONOU (tipo diferente)';
    }
    
    console.log(`   Status: ${status} | Tipo: ${contentType} | Tamanho: ${contentLength} bytes | Tempo: ${duration}ms | ${result}\n`);
    
    return {
      name: test.name,
      success: result.includes('OK') || result.includes('FUNCIONOU'),
      status,
      duration,
      contentType,
      contentLength
    };
    
  } catch (error) {
    console.log(`   ❌ ERRO: ${error.message}\n`);
    return {
      name: test.name,
      success: false,
      error: error.message
    };
  }
}

async function runAllTests() {
  console.log('🚀 Iniciando testes...\n');
  
  const results = [];
  
  for (const test of tests) {
    const result = await testEndpoint(test);
    results.push(result);
    
    // Pequena pausa entre testes
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Resumo dos resultados
  console.log('📊 RESUMO DOS TESTES\n');
  console.log('='.repeat(50));
  
  const successful = results.filter(r => r.success).length;
  const total = results.length;
  
  results.forEach(result => {
    const icon = result.success ? '✅' : '❌';
    const status = result.success ? 'PASSOU' : 'FALHOU';
    console.log(`${icon} ${result.name}: ${status}`);
    
    if (result.success && result.duration) {
      console.log(`   ⏱️ Tempo: ${result.duration}ms | 📏 Tamanho: ${result.contentLength} bytes`);
    }
    if (result.error) {
      console.log(`   🚨 Erro: ${result.error}`);
    }
  });
  
  console.log('='.repeat(50));
  console.log(`🎯 Resultado: ${successful}/${total} testes passaram`);
  
  if (successful === total) {
    console.log('🎉 Todos os testes passaram! A API está funcionando perfeitamente!');
  } else {
    console.log('⚠️ Alguns testes falharam. Verifique os logs acima.');
  }
}

// Executar testes
runAllTests().catch(console.error);

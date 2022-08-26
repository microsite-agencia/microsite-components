/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'localhost',
      'database.ms.test',
      'microsite.net.br',
      'testes.microsite.net.br',
      'utils.microsite.net.br',
      'database.microsite.net.br',
      'clientes.microsite.net.br'
    ],
  }
}

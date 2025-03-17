import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-green-600">EcoEletro</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#problem" className="text-gray-700 hover:text-green-600">O Problema</a>
                <a href="#solution" className="text-gray-700 hover:text-green-600">Nossa Solução</a>
                <a href="#journey" className="text-gray-700 hover:text-green-600">Como Funciona</a>
                <a href="#impact" className="text-gray-700 hover:text-green-600">Impacto</a>
                <a href="#contact" className="text-gray-700 hover:text-green-600">Contato</a>
                <a href="#collection-points" className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700">
                  Pontos de Coleta
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Previous sections remain unchanged until the Impact section */}
      {/* Hero Section */}
      <div className="relative bg-white pt-16">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1612965110642-d2ed35011901?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Electronic components background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/35"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transforme lixo eletrônico</span>
                  <span className="block text-green-600">em um futuro sustentável</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Pioneiros em soluções sustentáveis para o descarte e reciclagem de resíduos eletrônicos, 
                  gerando impacto positivo para o meio ambiente e a sociedade.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#collection-points" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Encontrar Pontos de Coleta
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#marketplace" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                      Conhecer Marketplace
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div id="problem" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">O Problema</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              O Impacto do Lixo Eletrônico
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              O Brasil gera mais de 2 milhões de toneladas de lixo eletrônico por ano, 
              com apenas 3% sendo reciclado adequadamente.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Contaminação Ambiental',
                  description: 'Metais pesados e substâncias tóxicas contaminam solo e água quando descartados incorretamente.',
                  image: 'https://www.sustenare.com.br/wp-content/uploads/2023/03/P040-pic1-featured-ewaste.jpg'
                },
                {
                  title: 'Desperdício de Recursos',
                  description: 'Toneladas de metais preciosos são perdidas anualmente por falta de reciclagem adequada.',
                  image: 'https://s2-techtudo.glbimg.com/gvJdNPPJpj5hNI22dnbb06-6c6U=/0x0:2121x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/Y/4/N5A3EcQxmPx62bAb5vcQ/lixo-eletronico-foto.jpeg'
                },
                {
                  title: 'Impacto Social',
                  description: 'Comunidades afetadas pela disposição irregular e perda de oportunidades econômicas.',
                  image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80'
                }
              ].map((item) => (
                <div key={item.title} className="relative">
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div id="solution" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Nossa Solução</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tecnologia a Serviço da Sustentabilidade
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <img
                  src="https://plus.unsplash.com/premium_photo-1716603741224-d0c67609a5f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Processo de reciclagem"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900">Coleta Estratégica</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                      <span className="ml-3">Agendamento online simplificado</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                      <span className="ml-3">Pontos de coleta estratégicos</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                      <span className="ml-3">Parcerias com empresas e instituições</span>
                    </li>
                  </ul>
                </div>

                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900">Processamento Inteligente</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                      <span className="ml-3">Triagem automatizada de componentes</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                      <span className="ml-3">Recuperação de metais preciosos</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                      <span className="ml-3">Certificação de procedência</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Journey Section */}
      <div id="journey" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Como Funciona</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sua Jornada para um Futuro Sustentável
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                    alt="Agendamento"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        1
                      </span>
                      <h3 className="ml-4 text-xl font-bold text-gray-900">Agende a Coleta</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li>• Acesse nosso site ou aplicativo</li>
                      <li>• Escolha entre coleta domiciliar ou ponto de descarte</li>
                      <li>• Preencha o formulário com os itens</li>
                      <li>• Selecione data e horário disponíveis</li>
                      <li>• Receba seu código de rastreamento</li>
                    </ul>
                    <a href="#learn-more" className="mt-4 inline-block text-green-600 hover:text-green-700">
                      Ler mais →
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                    alt="Triagem"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        2
                      </span>
                      <h3 className="ml-4 text-xl font-bold text-gray-900">Separação de Materiais</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li>• Triagem especializada dos eletrônicos</li>
                      <li>• Identificação de componentes reutilizáveis</li>
                      <li>• Destinação para instituições de ensino</li>
                      <li>• Processamento sustentável</li>
                    </ul>
                    <a href="#learn-more" className="mt-4 inline-block text-green-600 hover:text-green-700">
                      Ler mais →
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80"
                    alt="Recompensas"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center">
                      <span className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        3
                      </span>
                      <h3 className="ml-4 text-xl font-bold text-gray-900">Receba Recompensas</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li>• Ganhe EcoPontos pelo descarte</li>
                      <li>• Acompanhe seus pontos no app</li>
                      <li>• Troque por descontos e vouchers</li>
                      <li>• Doe para projetos sociais</li>
                    </ul>
                    <a href="#learn-more" className="mt-4 inline-block text-green-600 hover:text-green-700">
                      Ler mais →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Depoimentos</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              O que nossos clientes dizem
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Maria Silva",
                role: "Gerente de Sustentabilidade",
                company: "Tech Solutions",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
                testimonial: "A EcoEletro transformou nossa gestão de resíduos eletrônicos. O processo é simples e eficiente, além de nos ajudar a atingir nossas metas de sustentabilidade."
              },
              {
                name: "João Santos",
                role: "Diretor de TI",
                company: "Inovação Corp",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
                testimonial: "Excelente iniciativa! Além de dar destino correto aos equipamentos, ainda contribuímos com projetos sociais através dos EcoPontos."
              },
              {
                name: "Ana Oliveira",
                role: "Coordenadora Ambiental",
                company: "Verde Universidade",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
                testimonial: "A parceria com a EcoEletro nos permitiu implementar um programa completo de gestão de resíduos eletrônicos no campus."
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Perguntas Frequentes
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "Quais tipos de eletrônicos vocês coletam?",
                answer: "Aceitamos computadores, notebooks, celulares, tablets, impressoras, monitores, e outros equipamentos eletrônicos. Consulte nossa lista completa no site."
              },
              {
                question: "Como funciona o sistema de pontos?",
                answer: "Para cada item descartado, você recebe EcoPontos baseados no tipo e condição do equipamento. Os pontos podem ser trocados por descontos, vouchers ou doados para projetos sociais."
              },
              {
                question: "Qual é o prazo para coleta?",
                answer: "Após o agendamento, realizamos a coleta em até 48 horas úteis. Para grandes volumes, podemos estabelecer um cronograma personalizado."
              },
              {
                question: "Como garantem a segurança dos dados?",
                answer: "Todos os dispositivos passam por um processo seguro de limpeza de dados, seguindo padrões internacionais de segurança da informação."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-8">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <span className="ml-6 flex-shrink-0 text-green-600 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div id="impact" className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?auto=format&fit=crop&q=80"
            alt="Impact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/75"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:text-center">
            <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Nosso Impacto</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Transformando Números em Mudança Real
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-lg overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-200 truncate">Toneladas Recicladas</dt>
                <dd className="mt-1 text-3xl font-semibold text-green-400">50.000+</dd>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-200 truncate">Empregos Gerados</dt>
                <dd className="mt-1 text-3xl font-semibold text-green-400">200+</dd>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-200 truncate">Pontos de Coleta</dt>
                <dd className="mt-1 text-3xl font-semibold text-green-400">150+</dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
                alt="Contact us"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="text-left">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Faça Parte da Mudança
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Entre em contato para saber mais sobre nossas soluções sustentáveis.
                </p>
              </div>
              <form className="mt-8 grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="Sua mensagem"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">EcoEletro</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white">Sobre Nós</a></li>
                <li><a href="#impact" className="text-gray-300 hover:text-white">Impacto</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#collection" className="text-gray-300 hover:text-white">Coleta</a></li>
                <li><a href="#recycling" className="text-gray-300 hover:text-white">Reciclagem</a></li>
                <li><a href="#consulting" className="text-gray-300 hover:text-white">Consultoria</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-gray-300 hover:text-white">Privacidade</a></li>
                <li><a href="#terms" className="text-gray-300 hover:text-white">Termos</a></li>
                <li><a href="#compliance" className="text-gray-300 hover:text-white">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-300 hover:text-white">Fale Conosco</a></li>
                <li><a href="#support" className="text-gray-300 hover:text-white">Suporte</a></li>
                <li><a href="#partnership" className="text-gray-300 hover:text-white">Parcerias</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-base text-gray-400">
              © 2024 EcoEletro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
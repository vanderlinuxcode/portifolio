import React, { useState } from 'react';
import { 
  Github, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Terminal, 
  Server, 
  Database, 
  Cpu, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Code,
  Menu,
  X,
  Download,
  Car
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projeto SaaS', href: '#saas' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Competências', href: '#skills' },
    { name: 'Formação', href: '#education' },
    { name: 'Contato', href: '#contact' }
  ];

  // Logos atualizadas com a inclusão da Red Hat
  const companyLogos = [
    { name: 'REDHAT', label: 'Red Hat Enterprise', icon: '/imagens/redhat.png' },
    { name: 'CEVA', label: 'CEVA Logistics', icon: '/imagens/ceva.png' },
    { name: 'PFSENSE', label: 'pfSense Firewall', icon: '/imagens/pfsense.png' },
    { name: 'FORTINET', label: 'Fortinet Security', icon: '/imagens/fortinet.png' },
    { name: 'BROADCOM', label: 'Broadcom Enterprise', icon: '/imagens/broadcom.png' },
    { name: 'FURUKAWA', label: 'Furukawa Electric', icon: '/imagens/furukawa.png' },
    { name: 'AWS', label: 'AWS / Cloud', icon: '/imagens/aws.svg' },
    { name: 'IBM', label: 'IBM Enterprise', icon: '/imagens/ibm.svg' },
    { name: 'DELL', label: 'DELL Technologies', icon: '/imagens/dell.svg' },
    { name: 'CISCO', label: 'CISCO Systems', icon: '/imagens/cisco.svg' },
    { name: 'APPLE', label: 'macOS Systems', icon: '/imagens/apple.svg' },
    { name: 'GITHUB', label: 'GitHub / DevOps', icon: '/imagens/github.svg' },
    { name: 'LINUX', label: 'Linux Enterprise', icon: '/imagens/linux.svg' },
    { name: 'MONGODB', label: 'MongoDB Atlas', icon: '/imagens/mongodb.svg' },
    { name: 'CLOUDFLARE', label: 'Cloudflare DNS', icon: '/imagens/cloudflare.svg' },
    { name: 'JAVA', label: 'Java / Backend', icon: '/imagens/java.svg' },
    { name: 'MYSQL', label: 'MySQL Database', icon: '/imagens/mysql.svg' },
    { name: 'REACT', label: 'React / Expo', icon: '/imagens/react.svg' },
    { name: 'FIGMA', label: 'Figma UI/UX', icon: '/imagens/figma.svg' },
    { name: 'JIRA', label: 'Jira / Agile', icon: '/imagens/jira.svg' },
    { name: 'TSQL', label: 'T-SQL / SQL Server', icon: '/imagens/tsql.svg' },
    { name: 'OCI', label: 'Oracle Cloud (OCI)', icon: '/imagens/oci.svg' },
    { name: 'COBOL', label: 'COBOL / Mainframe', icon: '/imagens/cobol.svg' }
  ];

  const experiences = [
    {
      title: 'Aux. de Apoio Logístico',
      period: 'Emprego Atual',
      company: 'Adecco - CEVA - Galpão da Amazon Santa Maria BR-040',
      description: 'Responsive Logistics Inbound / Outbound, Integração & Onboarding, Melhoria contínua para os seus clientes.',
      highlight: true
    },
    {
      title: 'Estagiário GTI',
      period: '2025 – Março 2026',
      company: 'Senac Fecomércio Sesc',
      description: 'Gestão de infraestrutura de TI, suporte contínuo a instrutores e administração de laboratórios de tecnologia.'
    },
    {
      title: 'Suporte Terceirizado em TI / Infraestrutura',
      period: 'Prestação de Serviços',
      company: 'Santuário Dom Bosco W3Sul',
      description: 'Atendimento remoto e presencial para manutenção e monitoramento de 32 Câmeras CFTV, 1 servidor e 3 equipamentos corporativos.',
      contact: 'Contato: Padre Agnaldo S. Lima • (11) 98178-1609'
    },
    {
      title: 'Assistente de Tecnologia I',
      period: '2016 – 2023',
      company: 'Editora Edebe Brasil LTDA',
      description: 'Suporte técnico especializado em ambientes macOS e Windows, além de manutenção preventiva e corretiva de parque de hardware corporativo.'
    },
    {
      title: 'Analista de Suporte I',
      period: '2014 – 2015',
      company: 'CIS Brasil',
      description: 'Atendimento de suporte a sistemas corporativos e manutenção de equipamentos de TI.'
    },
    {
      title: 'Operador de Computador NOC / Service Desk',
      period: '2012 – 2015 (Noturno)',
      company: 'Stefanini Consultoria e Assessoria em Informática S.A',
      description: 'Monitoramento de infraestrutura, encaminhamento de soluções de nível II, rotinas de backup de dados e restauração de arquivos em conformidade no contrato CASSI-DF.'
    },
    {
      title: 'Técnico de Operação III – NOC / Service Desk',
      period: '2010 – 2011 (Noturno)',
      company: 'CSP Consultoria e Sistemas LTDA',
      description: 'Monitoramento crítico, resolução/escalonamento de incidentes nível II, gestão de backups corporativos e restauração de dados no Tribunal Superior do Trabalho (TST).'
    },
    {
      title: 'Técnico de Suporte Hardware Enterprise',
      period: '2008 – 2011',
      company: 'Star do Brasil Informática LTDA',
      description: 'Atuação em autorizada IBM na prestação de serviços de manutenção, integração e configuração de servidores da linha SystemX, BladeCenters e Storages.'
    },
    {
      title: 'Técnico Manutenção Jr',
      period: '2003 – 2008',
      company: 'NT-Service Tecnologia LTDA',
      description: 'Autorizada HP para manutenção técnica, suporte a clientes corporativos e configuração avançada de microcomputadores.'
    },
    {
      title: 'Técnico em Eletrônica e PD',
      period: '2001 – 2003',
      company: 'Shalom – Sistemas (Alocado SERPRO-DF)',
      description: 'Atendimento presencial em suporte técnico, diagnóstico eletrônico e manutenção preventiva de sistemas computacionais.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            VM<span className="text-slate-400">.dev</span>
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white focus:outline-none p-2"
            aria-label="Abrir Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/50 last:border-none"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 flex flex-col items-start w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Desenvolvedor Full-Stack | DevOps | Cloud
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Vanderli Marques <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              dos Reis
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-6 leading-relaxed">
            Especialista em transformar infraestrutura e arquitetura em nuvem em aplicações SaaS escaláveis, integradas com automação e IA.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 text-center text-sm sm:text-base"
            >
              Entre em Contato
            </a>

            <a
              href="/vanderlicv.pdf"
              target="_blank"
              download="Curriculo_Vanderli_Marques.pdf"
              className="px-6 py-3 rounded-lg bg-slate-900 text-cyan-400 border border-cyan-500/30 font-semibold hover:bg-slate-800 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/50 text-sm sm:text-base"
            >
              <Download size={18} />
              Baixar CV (PDF)
            </a>

            <a
              href="#saas"
              className="px-6 py-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 font-semibold hover:border-slate-700 transition-all text-center text-sm sm:text-base"
            >
              Ver Projeto SaaS
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400 w-full">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-cyan-400 shrink-0" />
              Brasília - DF
            </div>
            <a href="mailto:vanderlitecnologia@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm break-all">
              <Mail size={16} className="text-cyan-400 shrink-0" />
              vanderlitecnologia@gmail.com
            </a>
          </div>
        </div>

        {/* Foto do Perfil */}
        <div className="relative shrink-0 flex items-center justify-center group my-2 md:my-0">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
            <img 
              src="https://github.com/vanderlinuxcode.png" 
              alt="Vanderli Marques dos Reis" 
              className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Grid de Empresas/Tecnologias */}
      <section className="py-8 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="w-full text-base sm:text-lg text-slate-400 my-6 leading-relaxed text-justify">
  Focado em alinhar visão de negócio com execução técnica agregando arquitetura de sistemas, gestão de custos em nuvem juntamente com metodologias ágeis Scrum e Kanban.
</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 items-center justify-items-center">
            {companyLogos.map((company) => (
              <div 
                key={company.name} 
                className="flex flex-col items-center justify-center p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/70 w-full hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 group text-center cursor-default shadow-sm hover:shadow-cyan-500/10"
              >
                <div className="w-8 h-8 mb-2 flex items-center justify-center">
                  <img 
                    src={company.icon} 
                    alt={company.label} 
                    className={`max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110 ${
                      company.name === 'APPLE' || company.name === 'GITHUB' ? 'invert opacity-90 hover:opacity-100' : ''
                    }`}
                    loading="lazy"
                    onError={(e) => {
                      if (!e.target.src.endsWith('.png')) {
                        e.target.src = company.icon.replace('.svg', '.png');
                      }
                    }}
                  />
                </div>
                <span className="font-semibold tracking-wide text-xs text-slate-300 group-hover:text-cyan-400 transition-colors font-mono">
                  {company.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 sm:py-14 bg-slate-900/40 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-cyan-400 shrink-0" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Perfil Profissional</h2>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-7 backdrop-blur">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base text-justify">
              Profissional com sólida trajetória em infraestrutura de TI, suporte e automação, atualmente em transição para arquitetura de soluções em nuvem e desenvolvimento de produtos SaaS. Idealizador da Plataforma Virtual Multi-Tenant de Atendimento Conversacional com integração WhatsApp e Telegram, utilizando Node.js, MongoDB Atlas, OCS e Cloudflare. Focado em alinhar visão de negócio com execução técnica, arquitetura de sistemas, gestão de custos em nuvem e metodologias ágeis Scrum.
            </p>
          </div>
        </div>
      </section>

      {/* Featured SaaS Project */}
      <section id="saas" className="py-10 sm:py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <Server className="text-cyan-400 shrink-0" size={26} />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Projeto em Destaque</h2>
        </div>
        <p className="text-slate-400 mb-6 text-sm">Solução SaaS Plataforma Multi-Tenant de Atendimento Conversacional em produção e validação de mercado</p>

        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 sm:p-7 transition-all">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-5">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 inline-block">
                PROJETO EM CURSO • Plataforma Multi-Tenant de Atendimento Conversacional.
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">Plataforma de Atendimento Virtual com IA & Automação</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.centronictec.com.br"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
              >
                www.centronictec.com.br <ExternalLink size={12} />
              </a>
              <a
                href="https://robocv.centronictec.com.br/admin"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
              >
                robocv.centronictec.com.br <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
            MVP SaaS robusto focado na automação de comunicação corporativa via WhatsApp e Telegram utilizando bots interativos e inteligência de processo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-cyan-400 font-semibold mb-1 text-sm">Produto & MVP</h4>
              <p className="text-xs text-slate-400">Automação de atendimento via múltiplos canais com respostas estruturadas.</p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-cyan-400 font-semibold mb-1 text-sm">Arquitetura & OCI</h4>
              <p className="text-xs text-slate-400">Orquestração em nuvem OCI (pm2), MongoDB Atlas e Cloudflare Túnel Proxy.</p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-cyan-400 font-semibold mb-1 text-sm">Foco Estratégico</h4>
              <p className="text-xs text-slate-400">Escalabilidade horizontal, segurança e otimização de custos para o modelo SaaS.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Node.js', 'MongoDB Atlas', 'OCI PM2', 'AWS EC2', 'Cloudflare', 'WhatsApp API', 'Telegram API', 'Scrum', 'Figma', 'Jira'].map((tech) => (
              <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-10 sm:py-14 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-cyan-400 shrink-0" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Experiência Profissional</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-800">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className={`flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 border ${exp.highlight ? 'border-cyan-400 text-cyan-400' : 'border-slate-700'} shrink-0 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                  <div className={`w-2 h-2 rounded-full ${exp.highlight ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                </div>

                <div className="w-[calc(100%-2.25rem)] md:w-[calc(50%-2rem)] bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl ml-auto md:ml-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-bold text-white text-base">{exp.title}</h3>
                    <span className={`text-xs font-mono px-2.5 py-0.5 rounded w-fit ${exp.highlight ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <h4 className={`text-xs font-medium mb-2 ${exp.contact ? 'text-cyan-400' : 'text-slate-400'}`}>{exp.company}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{exp.description}</p>
                  {exp.contact && (
                    <span className="text-xs text-slate-500 block italic mt-2">{exp.contact}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10 sm:py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Code className="text-cyan-400 shrink-0" size={26} />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Competências Técnicas</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
              <Server size={18} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Cloud & Infra</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>• AWS (EC2, VPC)</li>
              <li>• Oracle Cloud Infrastructure (OCI)</li>
              <li>• Cloudflare DNS</li>
              <li>• Gestão de Custos Nuvem</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
              <Code size={18} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Dev & Backend</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>• Node.js / JavaScript</li>
              <li>• PHP & MySQL</li>
              <li>• COBOL / Mainframe</li>
              <li>• Java / React Native (Expo)</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
              <Database size={18} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Banco de Dados & BI</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>• DBA (Microsoft / SENAC)</li>
              <li>• MongoDB Atlas</li>
              <li>• Power BI Avançado</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
              <Cpu size={18} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">DevOps & Sistemas</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>• Git / GitHub / Vite</li>
              <li>• VMware Virtualização</li>
              <li>• APIs WhatsApp/Telegram</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-10 sm:py-14 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-cyan-400 shrink-0" size={26} />
                <h2 className="text-2xl font-bold text-white">Formação Acadêmica</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 border border-cyan-500/40 p-5 rounded-xl">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950 border border-cyan-800/60 px-2 py-0.5 rounded">2025 / Cursando</span>
                  <h3 className="text-base font-bold text-white mt-2">Técnico em Desenvolvimento de Sistemas</h3>
                  <p className="text-xs text-slate-400 mt-0.5">SENAC</p>                  
                  <a
                    href="https://github.com/vanderlinuxcode?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 underline mt-2 font-mono break-all"
                  >
                    Ver Repositórios do GitHub <ExternalLink size={12} className="shrink-0" />
                  </a>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                  <span className="text-xs font-mono text-slate-400">Concluído (2020)</span>
                  <h3 className="text-base font-bold text-white mt-1">Bacharel em Sistemas de Informação</h3>
                  <p className="text-xs text-slate-400 mt-1">Centro Universitário Ribeirão Preto - SP</p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                  <span className="text-xs font-mono text-slate-400">Concluído (1999 – 2001)</span>
                  <h3 className="text-base font-bold text-white mt-1">Técnico de Manutenção em Microinformática</h3>
                  <p className="text-xs text-slate-400 mt-1">SENAI • Registro CFT-DF</p>
                </div>
              </div>
            </div>
<div>
  <div className="flex items-center gap-3 mb-6">
    <Award className="text-cyan-400 shrink-0" size={26} />
    <h2 className="text-2xl font-bold text-white">Qualificações</h2>
  </div>

  <div className="space-y-3">
    {[
      {
        title: 'Six Sigma Yellow Belt Professional',
        description: '6Sigma Yellow Belt • 2026'
      },
      {
        title: 'Kanban Essentials Certified',
        description: 'Kanban Study Targeting Success • 2026'
      },
      {
        title: 'Operating Systems Basics',
        description: 'Cisco Networking Academy • 2026'
      },
      {
        title: 'Certificate CISCO Engaging Stakeholders for Success',
        description: 'CISCO • 2025'
      },
      {
        title: 'Certificado Introdução à IoT e à Transformação Digital',
        description: '2025'
      },
      {
        title: 'PHP - MySQL',
        description: 'SENAC • 2022'
      },
      {
        title: 'Administrador de Banco de Dados – DBA',
        description: 'SENAC / Microsoft • 2022'
      }
    ].map((qualification) => (
      <div
        key={qualification.title}
        className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-3"
      >
        <div className="p-1.5 rounded bg-slate-800 text-cyan-400 mt-0.5 shrink-0">
          <Award size={16} />
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-white text-xs sm:text-sm break-words">
            {qualification.title}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5 break-words">
            {qualification.description}
          </p>
        </div>
      </div>
    ))}

    <div className="bg-slate-900 border border-cyan-500/30 p-4 rounded-xl flex items-start gap-3">
      <div className="p-1.5 rounded bg-cyan-950 text-cyan-400 mt-0.5 shrink-0">
        <Car size={16} />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-white text-xs sm:text-sm">
          Carteira Nacional de Habilitação (CNH)
        </h3>
        <p className="text-xs text-cyan-400 font-mono mt-0.5">
          Categoria “B” • Validade: 10/2033
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Início imediato</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-6 text-sm">
          Disponível para novos projetos, consultoria em nuvem, desenvolvedor fullstack.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="mailto:vanderlitecnologia@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 text-sm break-all"
          >
            <Mail size={18} className="shrink-0" />
            vanderlitecnologia@gmail.com
          </a>
          
          <a
            href="https://wa.me/5561986516466"
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600/90 text-white font-semibold hover:bg-emerald-500 transition-all border border-emerald-500/30 shadow-lg shadow-emerald-600/20 text-sm"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.012-1.052z"/>
            </svg>
            (61) 98651-6466
          </a>
        </div>
      </section>

      <footer className="py-6 border-t border-slate-800/80 bg-slate-950 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Vanderli Marques dos Reis. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

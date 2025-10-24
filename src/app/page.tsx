import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Brain,
  Lock,
  Heart,
  Code,
  Zap,
  Terminal,
  EyeOff,
  Fingerprint,
  Binary,
  Mail,
  CheckCircle,
  Clock,
  Users,
  Briefcase,
  ExternalLink,
  FileText,
  Github
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden scanlines">
      {/* 控えめな背景パターン */}
      <div className="absolute inset-0 opacity-2 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-24 grid-rows-24 gap-12">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center text-[6px] font-mono text-primary/15">
              {i % 4 === 0 && <span>01</span>}
              {i % 4 === 1 && <div className="w-1 h-1 bg-primary/20 rounded-full"></div>}
              {i % 4 === 2 && <span className="opacity-30">.</span>}
              {i % 4 === 3 && <Binary className="w-2 h-2 opacity-30" />}
            </div>
          ))}
        </div>
      </div>

      {/* ターミナル風ヘッダーナビゲーション */}
      <header className="py-4 px-8 flex justify-between items-center border-b border-primary/15 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-foreground font-bold">zer0.im</span>
        </div>
        
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>SECURE</span>
        </div>
      </header>

      {/* ハッカー風ヒーローセクション */}
      <section className="py-20 px-8 flex flex-col items-center text-center max-w-4xl mx-auto relative">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

        {/* ターミナル風ステータス */}
        <div className="inline-block mb-8 p-3 rounded-lg bg-card/50 border border-primary/15 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">ENCRYPTED</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="h-3 w-3 text-primary" />
              <span className="text-xs text-primary">ANONYMOUS</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-accent" />
              <span className="text-xs text-accent">SECURE</span>
            </div>
          </div>
          <div className="text-sm text-center">
            メンタルヘルス・プライバシー保護システム
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span 
            className="text-primary glitch" 
            data-text="z"
          >
            z
          </span>
          <span className="text-muted-foreground">→</span>
          <span className="text-accent terminal-text">-0</span>
        </h1>

        <div className="mb-8 max-w-2xl">
          <p className="text-lg mb-4 leading-relaxed">
            技術を駆使して、生産性が低く社会的に孤立し脆弱な状態にある個人の苦悩を解消。
            社会的に不遇な状況にある人々の生活を改善するソリューションを構築。
          </p>
          <p className="text-base text-muted-foreground">
            プライバシー保護 × メンタルヘルステック
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#projects"
            className="px-8 py-4 rounded-lg border border-primary/50 hover:border-primary transition-all flex items-center gap-3 hover:bg-primary/10"
          >
            <Shield className="h-5 w-5" />
            プロジェクトを見る
          </Link>
          <Link
            href="#about"
            className="px-8 py-4 rounded-lg border border-primary/50 hover:border-primary transition-all flex items-center gap-3 hover:bg-primary/10"
          >
            <Fingerprint className="h-5 w-5" />
            詳細を見る
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center gap-3"
          >
            <Mail className="h-5 w-5" />
            お仕事のご相談
          </Link>
        </div>

        {/* 情報パネル */}
        <div className="mt-12 w-full max-w-2xl bg-card/60 rounded-lg border border-primary/20 p-6 text-sm backdrop-blur-sm">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-primary mb-2">Mission Statement</h3>
          </div>
          <div className="space-y-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>プライバシーを守りながら心の健康をサポート</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Brain className="h-4 w-4 text-accent" />
              <span>セキュアなメンタルヘルス技術の開発</span>
            </div>
          </div>
        </div>
      </section>

      {/* ハッカー風Aboutセクション */}
      <section id="about" className="py-12 md:py-16 px-4 md:px-8 bg-muted/20 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
          
          <div className="bg-card/30 rounded-lg border border-primary/10 p-8 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="relative group">
                <div className="w-48 h-48 rounded-full border-2 border-primary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
                  <Image 
                    src="/icon.png" 
                    alt="Takahiro Nakao" 
                    width={192} 
                    height={192} 
                    className="object-cover w-full h-full relative z-10"
                  />
                  <div className="absolute inset-0 border border-accent/30 rounded-full rotate-45"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="mb-6">
                  <h3 className="text-xl text-primary font-medium mb-2">Takahiro Nakao</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    <span className="font-mono text-primary">$</span> Mental Health Security Engineer
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 font-mono text-xs">
                    <div className="text-primary mb-1">{"// Core Values"}</div>
                    <div>Privacy by Design | Security First | Human-Centered</div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-base leading-relaxed mb-4">
                    セキュリティに精通したバックエンドWeb開発者として、ライフハック、コミュニケーション、
                    メンタルヘルスを向上させるアプリケーションを開発。
                  </p>
                  <p className="text-base leading-relaxed mb-6">
                    技術の力で人々の生活における障壁を取り除き、
                    彼らが成長への第一歩を踏み出せるよう支援することを目指す。
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <a
                      href="https://i0z0m.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/30 transition-colors"
                    >
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm font-mono">技術ブログ</span>
                      <ExternalLink className="h-3 w-3 text-primary" />
                    </a>
                    
                    <a
                      href="https://github.com/i0z0m"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/30 transition-colors"
                    >
                      <Github className="h-4 w-4 text-primary" />
                      <span className="text-sm font-mono">GitHub</span>
                      <ExternalLink className="h-3 w-3 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ハッカー風Skillsセクション */}
      <section id="skills" className="py-12 md:py-16 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10
                              group-hover:w-full group-hover:h-full group-hover:rounded-none
                              transition-all duration-500"></div>
              <Shield className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-4">バックエンド開発</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Node.js</li>
                <li>Ruby on Rails</li>
                <li>API設計と実装</li>
                <li>データベース設計</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10
                              group-hover:w-full group-hover:h-full group-hover:rounded-none
                              transition-all duration-500"></div>
              <Brain className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-4">メンタルヘルステック</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>感情分析アルゴリズム</li>
                <li>行動健康トラッキングシステム</li>
                <li>匿名化データ分析</li>
                <li>リスク検出と介入プロトコル</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10
                              group-hover:w-full group-hover:h-full group-hover:rounded-none
                              transition-all duration-500"></div>
              <Code className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-4">フロントエンド</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Typescript</li>
                <li>React / Vue</li>
                <li>暗号化データベース設計</li>
                <li>セキュアAPI構築</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10
                              group-hover:w-full group-hover:h-full group-hover:rounded-none
                              transition-all duration-500"></div>
              <Heart className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-4">UXとアクセシビリティ</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>心理的安全性に配慮したUI設計</li>
                <li>ニューロダイバーシティに対応したUX</li>
                <li>トラウマインフォームドデザイン</li>
                <li>多言語・文化的配慮</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ハッカー風Projectsセクション */}
      <section id="projects" className="py-16 px-8 bg-muted/50 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* プロジェクト1 */}
            <div className="bg-card/60 rounded-lg border border-primary/30 overflow-hidden group relative backdrop-blur-sm neon-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-48 bg-secondary/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5"></div>
                <Lock className="absolute top-4 right-4 h-5 w-5 text-primary/70" />
                <div className="bg-primary/10 p-3 rounded-full">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">職場のストレスチェック</h3>
                <p className="mb-4">従業員向けメンタルヘルスモニタリングシステム（就職活動用のポートフォリオ作品）</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">Typescript</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">React</span>
                </div>
                <a href="https://stress-check.zer0.im" className="text-primary hover:underline inline-flex items-center gap-1">
                  詳細を見る <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* プロジェクト2 */}
            <div className="bg-card/60 rounded-lg border border-primary/30 overflow-hidden group relative backdrop-blur-sm neon-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-48 bg-secondary/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5"></div>
                <Lock className="absolute top-4 right-4 h-5 w-5 text-primary/70" />
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">ひきこもり向けCBTツール</h3>
                <p className="mb-4">大学が行なっている研究（引きこもりに関する研究）のためのツール（実務経験のためNDAにより非公開）</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">Ruby on Rails</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">MySQL</span>
                </div>
                <a href="#" className="text-primary hover:underline inline-flex items-center gap-1">
                  詳細を見る <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section id="services" className="py-12 md:py-16 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">Services</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">トータルテクニカルソリューション</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              システム開発からインフラ構築、技術コンサルティングまで、メンタルヘルス・ウェルビーイング分野に特化した
              包括的な技術サポートを提供。企画段階から運用保守まで、プロジェクトの全工程をワンストップでサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <Code className="h-8 w-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-3">システム開発</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• フルスタック Web/Mobile 開発</li>
                <li>• API設計・マイクロサービス</li>
                <li>• データベース設計・最適化</li>
                <li>• テスト駆動開発・CI/CD</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <Terminal className="h-8 w-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-3">インフラ・DevOps</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• クラウドインフラ設計・構築</li>
                <li>• Docker・Kubernetes環境</li>
                <li>• 監視・ログ管理システム</li>
                <li>• セキュリティ強化・最適化</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-3">技術コンサルティング</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• 技術戦略・アーキテクチャ設計</li>
                <li>• システム評価・改善提案</li>
                <li>• 開発チーム支援・指導</li>
                <li>• プロジェクト管理・品質管理</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-3">専門特化サービス</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• メンタルヘルステック開発</li>
                <li>• プライバシー保護システム</li>
                <li>• 心理的安全性重視 UX設計</li>
                <li>• GDPR・医療情報保護対応</li>
              </ul>
            </div>
          </div>

          <div className="bg-card/30 rounded-lg border border-primary/10 p-8">
            <h4 className="text-xl font-semibold mb-6 text-center">
              <span className="font-mono text-primary">{'// Comprehensive Support'}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h5 className="font-semibold mb-2">企画・設計</h5>
                <p className="text-sm text-muted-foreground">要件定義からアーキテクチャ設計まで</p>
              </div>
              <div>
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h5 className="font-semibold mb-2">開発・構築</h5>
                <p className="text-sm text-muted-foreground">高品質なシステム開発・インフラ構築</p>
              </div>
              <div>
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h5 className="font-semibold mb-2">セキュリティ</h5>
                <p className="text-sm text-muted-foreground">包括的なセキュリティ対策・監査</p>
              </div>
              <div>
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h5 className="font-semibold mb-2">運用・保守</h5>
                <p className="text-sm text-muted-foreground">継続的な改善・技術サポート</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクトセクション */}
      <section id="contact" className="py-12 md:py-16 px-4 md:px-8 bg-muted/20 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">お仕事のご相談・お見積り</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                メンタルヘルス・ウェルビーイング分野でのシステム開発をご検討でしたら、ぜひお気軽にご相談ください。
                利用者の心理的安全性とプライバシー保護を第一に考えた、倫理的で持続可能な開発を心がけています。
              </p>
              <div className="mb-8 p-4 bg-accent/5 rounded-lg border border-accent/10">
                <h4 className="font-semibold mb-2 text-accent">対応可能な契約形態</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>プロジェクト単位での開発委託</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>チーム参加型の業務委託</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>継続的な開発・保守サポート</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-primary" />
                    <span>技術コンサルティング</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">メール</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      プロジェクトの詳細やご要件についてお聞かせください
                    </p>
                    <a
                      href="mailto:i0z0mu@gmail.com"
                      className="text-primary hover:underline"
                    >
                      i0z0mu@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/40 rounded-lg border border-primary/10 p-8">
              <h4 className="text-lg font-semibold mb-6 text-center">
                <span className="font-mono text-primary">{'// Specialized Domains'}</span>
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover-lift">
                  <Brain className="h-5 w-5 text-primary" />
                  <span className="text-sm font-mono">Mental Health Security Systems</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover-lift">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-mono">Privacy-by-Design Architecture</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover-lift">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="text-sm font-mono">Ethical Web/Mobile Applications</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover-lift">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-mono">Wellbeing Tech & Life Optimization</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold font-mono">Security & Confidentiality</span>
                </div>
                <div className="text-xs text-muted-foreground font-mono space-y-1">
                  <div>🔐 End-to-end encryption by default</div>
                  <div>🤝 NDA & ethical guidelines compliance</div>
                  <div>🛡️ Zero-knowledge architecture when possible</div>
                  <div>🔒 Mental health data protection (HIPAA/GDPR+)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 px-8 border-t border-primary/30 bg-background/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold mb-4 md:mb-0 flex items-center">
            <Shield className="h-4 w-4 mr-2 text-primary" />
            zer0.im
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/i0z0m" className="hover:text-primary transition-colors flex items-center gap-1 font-mono" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="https://i0z0m.github.io" className="hover:text-primary transition-colors flex items-center gap-1 font-mono" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              Blog
            </a>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" /> © {new Date().getFullYear()}  All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

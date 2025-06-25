import Link from "next/link";
import Image from "next/image"; // Add this import
import { cn } from "@/lib/utils";
import { Shield, Brain, Lock, Heart, KeyRound, Code, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* セキュリティパターン装飾 - 背景 */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              {i % 3 === 0 && <div className="w-6 h-6 border border-primary rounded-full"></div>}
              {i % 3 === 1 && <div className="w-4 h-4 bg-accent/20 rounded-sm rotate-45"></div>}
              {i % 3 === 2 && <div className="text-xs opacity-20">01</div>}
            </div>
          ))}
        </div>
      </div>

      {/* ヘッダーナビゲーション */}
      <header className="py-6 px-8 flex justify-center items-center border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-10">
        <nav>
          <ul className="flex gap-6">
            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="#skills" className="hover:text-primary transition-colors">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="py-20 px-8 flex flex-col items-center text-center max-w-3xl mx-auto relative">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="inline-block mb-6 p-2 rounded-full bg-accent/10 border border-accent/20">
          <div className="flex items-center gap-2 px-3 py-1">
            <Lock className="h-4 w-4 text-primary" />
            <span className="text-sm">安全なメンタルヘルス・ソリューション</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-primary">z</span>→<span className="text-accent-foreground">-0</span>
        </h1>

        <p className="text-lg mb-8">
          技術を駆使して、生産性が低く社会的に孤立し脆弱な状態にある個人の苦悩を解消します。 社会的に不遇な状況にある人々の生活を改善するソリューションを構築します。
        </p>

        <div className="flex gap-4">
          <Link
            href="#projects"
            className={cn("rounded-full bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors flex items-center gap-2")}
          >
            <Shield className="h-4 w-4" /> プロジェクトを見る
          </Link>
          <Link
            href="#contact"
            className={cn("rounded-full border border-border px-6 py-3 hover:bg-secondary transition-colors flex items-center gap-2")}
          >
            <KeyRound className="h-4 w-4" /> お問い合わせ
          </Link>
        </div>
      </section>

      {/* Aboutセクション */}
      <section id="about" className="py-16 px-8 bg-muted relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="h-1 w-20 bg-primary/30 rounded-full mb-3"></div>
          <h3 className="text-xl text-primary font-medium mb-6">Takahiro Nakao</h3>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center z-10 overflow-hidden">
                <Image 
                  src="/icon.png" 
                  alt="Takahiro Nakao" 
                  width={160} 
                  height={160} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full"></div>
              <div className="absolute inset-0 border border-accent/20 rounded-full rotate-45"></div>
            </div>

            <div className="flex-1">
              <p className="mb-4">
                セキュリティに精通したバックエンドWeb開発者として、ライフハック、コミュニケーション、 メンタルヘルスを向上させるアプリケーションを開発します。
              </p>
              <p>
                技術の力で人々の生活における障壁を取り除き、 彼らが成長への第一歩を踏み出せるよう支援することを目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skillsセクション */}
      <section id="skills" className="py-16 px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="h-1 w-20 bg-primary/30 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10 
                              group-hover:w-full group-hover:h-full group-hover:rounded-none 
                              transition-all duration-500"></div>
              <Shield className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-4">バックエンド開発</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Node.js</li>
                <li>Rust / Go</li>
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
              <Users className="h-6 w-6 text-primary mb-3" />
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

      {/* Projectsセクション */}
      <section id="projects" className="py-16 px-8 bg-muted relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="h-1 w-20 bg-primary/30 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* プロジェクト1 */}
            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm border border-border/50 group relative">
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
                <p className="mb-4">従業員向けメンタルヘルスモニタリングシステム</p>
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
            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm border border-border/50 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-48 bg-secondary/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5"></div>
                <Lock className="absolute top-4 right-4 h-5 w-5 text-primary/70" />
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">社会的つながりプラットフォーム</h3>
                <p className="mb-4">匿名性と安全性を重視した孤立者向けコミュニティプラットフォーム</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">Vue.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">PostgreSQL</span>
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

      {/* Contactセクション */}
      <section id="contact" className="py-16 px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <KeyRound className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <div className="h-1 w-20 bg-primary/30 rounded-full mb-8"></div>

          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-8 inline-flex items-center gap-3">
            <Lock className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm">プロジェクトの相談やお問い合わせはこちらからお願いします。</p>
          </div>

          <form className="space-y-6 bg-card/30 p-8 rounded-lg border border-border relative">
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5 rounded-lg"></div>

            <div className="relative z-10">
              <label htmlFor="name" className="block mb-2 font-medium">お名前</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="あなたのお名前"
              />
            </div>

            <div className="relative z-10">
              <label htmlFor="email" className="block mb-2 font-medium">メールアドレス</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="example@domain.com"
              />
            </div>

            <div className="relative z-10">
              <label htmlFor="message" className="block mb-2 font-medium">メッセージ</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="プロジェクトについてのお問い合わせや協業のご提案をお寄せください"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <KeyRound className="h-4 w-4" /> 暗号化して送信
            </button>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 px-8 border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono font-bold mb-4 md:mb-0 flex items-center">
            <Shield className="h-4 w-4 mr-2 text-primary" />
            zer0.im
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/i0z0m" className="hover:text-primary transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            {/* <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </a> */}
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

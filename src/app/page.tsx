import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ヘッダーナビゲーション */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-border">
        <div className="font-mono text-xl font-bold">zer0.im</div>
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
      <section className="py-20 px-8 flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">-1</span>から<span className="text-accent-foreground">0</span>への転換
        </h1>
        <p className="text-lg mb-8">
          技術を駆使して、生産性が低く社会的に孤立し脆弱な状態にある個人の苦悩を解消します。
          社会的に不遇な状況にある人々の生活を改善するソリューションを構築します。
        </p>
        <div className="flex gap-4">
          <Link 
            href="#projects" 
            className={cn("rounded-full bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors")}
          >
            プロジェクトを見る
          </Link>
          <Link 
            href="#contact" 
            className={cn("rounded-full border border-border px-6 py-3 hover:bg-secondary transition-colors")}
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Aboutセクション */}
      <section id="about" className="py-16 px-8 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex items-center justify-center">
              {/* プロフィール画像をここに追加 */}
              <span className="text-6xl">👨‍💻</span>
            </div>
            <div className="flex-1">
              <p className="mb-4">
                セキュリティに精通したバックエンドWeb開発者として、ライフハック、コミュニケーション、
                メンタルヘルスを向上させるアプリケーションの開発に情熱を注いでいます。
              </p>
              <p>
                「-1から0への転換」というコンセプトは、技術の力で人々の生活における障壁を取り除き、
                彼らが成長への第一歩を踏み出せるよう支援することを意味します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skillsセクション */}
      <section id="skills" className="py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">バックエンド開発</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Node.js</li>
                <li>Rust / Go</li>
                <li>API設計と実装</li>
                <li>データベース設計 (SQL/NoSQL)</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">セキュリティ</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>脆弱性評価</li>
                <li>認証・認可システム</li>
                <li>データ保護と暗号化</li>
                <li>セキュアコーディング</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">フロントエンド</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>React / Vue</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>アクセシビリティ</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">その他</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>DevOps / CI/CD</li>
                <li>コンテナ技術 (Docker)</li>
                <li>クラウドサービス (AWS, GCP)</li>
                <li>テスト駆動開発</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projectsセクション */}
      <section id="projects" className="py-16 px-8 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* プロジェクト1 */}
            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-secondary flex items-center justify-center">
                {/* プロジェクト画像 */}
                <span className="text-4xl">🧠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">職場のストレスチェック</h3>
                <p className="mb-4">精神的健康を管理・追跡するためのセキュアなウェブアプリケーション</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">React</span>
                </div>
                <a href="#" className="text-primary hover:underline">詳細を見る →</a>
              </div>
            </div>
            
            {/* プロジェクト2 */}
            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-secondary flex items-center justify-center">
                {/* プロジェクト画像 */}
                <span className="text-4xl">👥</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">社会的つながりプラットフォーム</h3>
                <p className="mb-4">孤立した人々をコミュニティと結びつける安全なソーシャルプラットフォーム</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">Vue.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">PostgreSQL</span>
                </div>
                <a href="#" className="text-primary hover:underline">詳細を見る →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contactセクション */}
      <section id="contact" className="py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="mb-8">プロジェクトの相談やお問い合わせはこちらからお願いします。</p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">お名前</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">メールアドレス</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">メッセージ</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              送信する
            </button>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 px-8 border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono font-bold mb-4 md:mb-0">zer0.im</div>
          <div className="flex gap-6">
            <a href="https://github.com/i0z0m" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

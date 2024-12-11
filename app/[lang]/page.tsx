import type { Lang } from '@/types/i18n'
import { messages } from '@/messages'

type Props = {
  params: {
    lang: Lang
  }
}


export default function Page({ params: { lang } }: Props) {
  return (
    <div>
      <h1>{messages[lang].hello}</h1>
      <p>{messages[lang].welcome}</p>
    </div>
  )
}

// 生成静态路径
export function generateStaticParams() {
  // 使用 Object.keys 自动获取所有支持的语言
  return Object.keys(messages).map(lang => ({
    lang: lang
  }))
}
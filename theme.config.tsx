import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"
import Image from "next/image"
import { useRouter } from "next/router"

const config: DocsThemeConfig = {
  logo: (
    <Image
      src="/assets/Logo.svg"
      alt="logo"
      width={126}
      height={28}
    />
  ),
  project: {
    link: "https://github.com/bottest-ai/bottest-ai-docs",
  },
  docsRepositoryBase: "https://github.com/bottest-ai/bottest-ai-docs/blob/main",
  footer: {
    component: <></>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: "%s | bottest.ai Docs"
    }
  },
  primaryHue: 213,
  sidebar: {
    toggleButton: true,
  },
}

export default config

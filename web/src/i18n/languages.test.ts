/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { describe, expect, test } from 'vitest'

import { toIntlLocale } from './languages'

// 仅中文定制版：languages.ts 仅保留 toIntlLocale。多语言探测函数
// （convertDetectedLanguage 等）已随 Chinese-only 定制移除，config.ts
// 直接强制 lng='zh'，因此这里只覆盖 toIntlLocale 的映射与降级行为。
describe('toIntlLocale', () => {
  test('maps cached interface codes onto valid BCP-47 tags', () => {
    expect(toIntlLocale('zhCN')).toBe('zh-CN')
    expect(toIntlLocale('zhTW')).toBe('zh-TW')
  })

  test('canonicalizes standard locale tags and falls back for unknown input', () => {
    expect(toIntlLocale('zh-CN')).toBe('zh-CN')
    expect(toIntlLocale('en')).toBe('en')
    expect(toIntlLocale('not a locale')).toBeUndefined()
    expect(toIntlLocale('')).toBeUndefined()
    expect(toIntlLocale(null)).toBeUndefined()
    expect(toIntlLocale(undefined)).toBeUndefined()
  })
})

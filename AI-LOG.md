# AI-LOG — IA#1 cartTotal with a harness

## 2026-09-29 — đọc đề IA#1
Tool: Claude Code.
Asked for: giải thích đề IA#1 (slide session 2, README starter), dịch rubric và template SELF_ASSESSMENT sang tiếng Việt.
Kept: bản tóm tắt yêu cầu và 4 bước làm bài, dùng làm checklist.
Changed: không có.
Rejected: không có.
By hand: không có code ở bước này. Tự đọc lại rubric bản gốc tiếng Anh.

## 2026-09-29 — clone starter, npm test đỏ, tạo repo riêng
Tool: Claude Code — chỉ để hỏi các lệnh cần gõ.
Asked for: các bước clone starter, chạy test, đổi remote sang repo GitHub của mình.
Kept: thứ tự các lệnh, đổi `origin` của thầy thành `upstream`.
Changed: không có.
Rejected: không có.
By hand: tự gõ toàn bộ lệnh. `npm test` đỏ: 1 test, fail 1, `Error: not implemented` tại src/cart.js:3.
Tự tạo repo TrucHang676/wad-cart trên GitHub, đổi remote, push commit starter 56048c0.

## 2026-09-29 — rules file CLAUDE.md (commit ed3dc83)
Tool: Claude Code.
Asked for: viết toàn bộ CLAUDE.md cho repo này theo slide 15–16 và mục Harness của rubric.
Kept: cả file như nó viết — Stack, Files, Commands, Style, Money, Tests, Never.
Changed: không sửa dòng nào.
Rejected: bản gợi ý ngắn hơn (~25 dòng) ở lượt trước; tôi yêu cầu bản đầy đủ,
có thêm mục Files và Tests.
By hand: đọc từng dòng trước khi commit. Mục Style lấy theo code starter
(2 dấu cách, nháy đơn, không dấu chấm phẩy).

## 2026-09-29 — gate lint: ESLint (commit b3c5efc)
Tool: Claude Code.
Asked for: một gate format/lint cho repo. Nó đề xuất ESLint recommended và chạy thử trên bản sao trước khi đưa tôi.
Kept: `eslint.config.js` chỉ gồm `js.configs.recommended`; script `"lint": "eslint ."`.
Changed: không có.
Rejected: không có.
By hand: tự chạy `npm install --save-dev eslint @eslint/js`, tự thêm script vào package.json, tự gõ eslint.config.js
(gõ thụt 4 dấu cách — lệch với quy tắc 2 dấu cách trong CLAUDE.md; ESLint recommended không bắt lỗi thụt lề).
`npm run lint` đỏ: 2 lỗi `no-unused-vars` (`items`, `options`) tại src/cart.js:2 — đúng như dự kiến, để nguyên cho tới khi cài đặt cartTotal.
Quyết định: ESLint chỉ là devDependency, là công cụ kiểm tra; src/ không import gì — "no dependencies" vẫn giữ cho cartTotal.

## 2026-09-29 — CI GitHub Actions (commit ad42b4c)
Tool: Claude Code.
Asked for: workflow CI chạy lint và test mỗi lần push.
Kept: `.github/workflows/ci.yml` như nó viết — ubuntu-latest, Node 22, `npm ci`, `npm run lint`, `npm test`.
Changed: tự sửa thụt lề eslint.config.js về 2 dấu cách cho khớp CLAUDE.md..
Rejected: không có.
By hand: tự tạo file, commit, push. Xem tab Actions: run #1 "Add CI: lint and test on every push" — Failure, 11s,
bước lint fail với đúng 2 lỗi `no-unused-vars` ở src/cart.js#L2 như trên máy. CI đã chạy đỏ trước khi có code.

## Ghi chú
Các entry trên do Claude Code soạn theo yêu cầu của tôi, dựa trên lịch sử commit và kết quả tôi gửi; tôi đã đọc lại và xác nhận đúng.

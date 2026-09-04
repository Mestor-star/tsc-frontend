// ============================================================
//  终末停滞委员会 · 低语者终端 - 酒馆助手入口
//  功能：设置前端基础URL，加载主界面
//  配合 index.html 使用
// ============================================================

// 设置前端基础URL - 请将下面的地址替换为你实际托管的地址
globalThis.__TSC_FRONTEND_BASE_URL__ = 'https://cdn.jsdelivr.net/gh/Mestor-star/tsc-frontend@main';

// 导入主脚本（如果HTML中已有完整逻辑，此步骤可省略，但保留作为备选）
// 如果你的 index.html 是完整的独立页面，这一行并非必须
// 但为了兼容性和未来扩展，建议保留
console.log('🔮 终末停滞委员会 · 低语者终端入口已加载');
console.log('📡 前端地址:', globalThis.__TSC_FRONTEND_BASE_URL__);

// 如果需要在酒馆助手中暴露一些全局方法，可以在这里添加
// 例如：
// window.TSC = {
//   version: '1.0.0',
//   baseUrl: globalThis.__TSC_FRONTEND_BASE_URL__
// };

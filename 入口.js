// 终末停滞委员会 · 大前端入口
// 此文件由酒馆助手在启动时加载

// 设置前端基础URL，供HTML中的脚本引用
globalThis.__TSC_FRONTEND_BASE_URL__ = 'https://cdn.jsdelivr.net/gh/Mestor-star/zhongmo-terminal@main';

// 设置运行环境标识
globalThis.__TSC_RUNTIME__ = 'tavern';

// 与酒馆通信的辅助函数
globalThis.__TSC_SEND_TO_TAVERN__ = function(content) {
    try {
        // 尝试通过酒馆的API发送消息
        if (typeof SillyTavern !== 'undefined' && SillyTavern.getContext) {
            const context = SillyTavern.getContext();
            if (context && context.setSendString) {
                context.setSendString(content);
                return true;
            }
        }
        // 备用方案：通过事件触发
        const event = new CustomEvent('tsc-send-to-tavern', { detail: content });
        window.dispatchEvent(event);
        return true;
    } catch (e) {
        console.error('[终末停滞委员会] 发送消息失败:', e);
        return false;
    }
};

// 从酒馆接收消息的监听器
window.addEventListener('tsc-receive-from-tavern', function(e) {
    const content = e.detail;
    console.log('[终末停滞委员会] 收到酒馆消息:', content);
    // 在这里处理从酒馆收到的消息
    // 例如：将消息转发给前端HTML
    const event = new CustomEvent('tsc-frontend-message', { detail: content });
    window.dispatchEvent(event);
});

// 通知酒馆助手前端已就绪
console.log('✅ 终末停滞委员会 · 大前端入口已加载');
console.log('📌 前端基础URL:', globalThis.__TSC_FRONTEND_BASE_URL__);

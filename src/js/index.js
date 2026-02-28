document.addEventListener('DOMContentLoaded', () => {

    let themeMode = localStorage.getItem('theme') || 'light';
    const themeBtn = document.getElementById('theme');

    function updatePopoverContent() {
        const content = themeMode === 'dark' ? '切换为浅色模式' : '切换为深色模式';
        themeBtn.setAttribute('data-bs-content', content);

        // 销毁旧 Popover（如果存在）
        const oldPopover = bootstrap.Popover.getInstance(themeBtn);
        if (oldPopover) oldPopover.dispose();

        // 重新初始化
        new bootstrap.Popover(themeBtn);
    }

    function applyTheme() {
        const html = document.documentElement;
        const useEl = themeBtn.querySelector('use');
        
        if (themeMode == 'dark') {
            html.setAttribute('data-bs-theme', 'dark');
            useEl.setAttribute('href', '#icon-moon');
        } else {
            html.removeAttribute('data-bs-theme');
            useEl.setAttribute('href', '#icon-taiyang');
        }

        localStorage.setItem('theme', themeMode);
        updatePopoverContent(); // 更新提示
    }

    themeBtn.addEventListener('click', () => {
        themeMode = themeMode == 'dark' ? 'light' : 'dark';
        applyTheme();
    });

    applyTheme(); // 初始应用
})

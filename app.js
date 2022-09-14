const dashboard = document.querySelector(".dashboard");

dashboard.addEventListener('click', ()=> collapseDashboard());

let collapsed = false;

function collapseDashboard() {
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');

    if (!collapsed) {
        body.classList.add('collapsed');
        sidebar.classList.add('collapsed');
        collapsed = true;
    } else {
        body.classList.remove('collapsed');
        sidebar.classList.remove('collapsed');
        collapsed = false;
    }
}
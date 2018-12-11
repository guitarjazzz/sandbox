class MenuHandler {
  constructor(classItem) {
    this.activeTab = 0;
    const filtItems = document.getElementsByClassName(classItem);
    Array.prototype.map.call(filtItems, (element, i) => {
      element.addEventListener("click", e => {
        e.currentTarget.classList.add("active");
        filtItems[this.activeTab].classList.remove("active");
        this.activeTab = i;
      });
    });
  }
  get activeTab() {
    return this.activeTabIndex;
  }
  set activeTab(i) {
    this.activeTabIndex = i;
  }
}
new MenuHandler("tab");

export default {
    data: {
        Title: "",
        list_item_class1: "content-bar",
        text_class1: "bar-title",
        list_item_class2: "content-bar",
        text_class2: "bar-title",
        list_item_class3: "content-bar",
        text_class3: "bar-title",
        list_item_class4: "content-bar",
        text_class4: "bar-title",
        list_item_class5: "content-bar",
        text_class5: "bar-title",
        list_item_class6: "content-bar",
        text_class6: "bar-title",
    },
    onInit() {
        this.Title = this.$t('strings.title');
    },
/* activated when the component has focus */
    focusFunc1: function () {
        this.list_item_class1 = "content-bar-focus";
        this.text_class1 = "bar-title-focus";
    },
/* activated when the component loses focus */
    blurFunc1: function () {
        this.list_item_class1 = "content-bar";
        this.text_class1 = "bar-title";
    },
    focusFunc2: function () {
        this.list_item_class2 = "content-bar-focus";
        this.text_class2 = "bar-title-focus";
    },
    blurFunc2: function () {
        this.list_item_class2 = "content-bar";
        this.text_class2 = "bar-title";
    },
    focusFunc3: function () {
        this.list_item_class3 = "content-bar-focus";
        this.text_class3 = "bar-title-focus";
    },
    blurFunc3: function () {
        this.list_item_class3 = "content-bar";
        this.text_class3 = "bar-title";
    },
    focusFunc4: function () {
        this.list_item_class4 = "content-bar-focus";
        this.text_class4 = "bar-title-focus";
    },
    blurFunc4: function () {
        this.list_item_class4 = "content-bar";
        this.text_class4 = "bar-title";
    },
    focusFunc5: function () {
        this.list_item_class5 = "content-bar-focus";
        this.text_class5 = "bar-title-focus";
    },
    blurFunc5: function () {
        this.list_item_class5 = "content-bar";
        this.text_class5 = "bar-title";
    },
    focusFunc6: function () {
        this.list_item_class6 = "content-bar-focus";
        this.text_class6 = "bar-title-focus";
    },
    blurFunc6: function () {
        this.list_item_class6 = "content-bar";
        this.text_class6 = "bar-title";
    }
}
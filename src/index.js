import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";



const styleHeader = {
    init: function() {
        this._cacheDOM();
        this._createContainer();
        this._createH2();
        this._appendToContainer();
        this._render()
    },
    _cacheDOM: function() {
        this.nav = document.querySelector('nav');
        this.header = document.querySelector('header');
    },
    _createContainer: function() {
        this.container = document.createElement('div');
        this.container.classList.add('container');
    },
    _createH2: function() {
        this.h2 = document.createElement('h2');
        this.h2.textContent = "Yummy Slice";
    },
    _appendToContainer: function() {
        this.container.append(this.h2);
        this.container.append(this.nav);
    },
    _render: function() {
        this.header.append(this.container);
    },
};

const styleFooter = {
    init: function() {
        this._cacheDOM();
        this._createFooter();
        this._createP();
        this._createSpan();
        this._appendToFooter();
        this.content.append(this.footer);
    },
    _cacheDOM: function() {
        this.content = document.querySelector('#content');
    },
    _createFooter: function() {
        this.footer = document.createElement('footer');
    },
    _createP: function() {
        this.p = document.createElement('p');
    },
    _createSpan: function() {
        this.span = document.createElement('span');
        this.span.textContent = "Yummy Slice";
    },
    _appendToFooter: function() {
        this.p.innerHTML = "&copy; 2025 ";
        this.p.append(this.span);
        this.p.innerHTML += " All Right Reserved";
        this.footer.append(this.p);
    }
}

function swichTabs(e) {
    document.querySelector('main').remove();
    document.querySelector('footer').remove();

    switch (e.target.textContent) {
        case "Home":
            home();
            break;
        case "Menu":
            menu();
            break;
        case "About":
            about();
            break;
        default:
            home();
            break;
    }
    styleFooter.init();
}

function bindevents() {
    const btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', swichTabs);
    }
}

styleHeader.init();
home();
styleFooter.init();
bindevents();


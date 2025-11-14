export default function() {
    const content = document.querySelector('#content');
    const main = createMain();
    const landing = createLanding();
    const text = createText();
    const h1 = createH1();
    const p = createP();


    appendToLanding();
    appendToMain();
    content.append(main);




    function createMain() {
        return document.createElement('main');
    }
    
    function createLanding() {
        const landing = document.createElement('section');
        landing.classList.add('landing');
        return landing;
    }
    
    function createText() {
        const text = document.createElement('div');
        text.classList.add('text');
        return text;
    }

    function createH1() {
        const h1 = document.createElement('h1');
        h1.textContent = "Welcome to Yummy Slice";
        return h1;
    }
    
    function createP() {
        const p = document.createElement('p');
        p.textContent = "Where Every Slice is a Yummy Slice";
        return p;
    }

    function appendToLanding() {
        text.append(h1);
        text.append(p);
        landing.append(text);
    }

    function appendToMain() {
        main.append(landing);
    }

}
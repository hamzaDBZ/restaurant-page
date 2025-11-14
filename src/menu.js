export default function() {
    const content = document.querySelector('#content');
    const main = createMain();
    const menu = createMenu();
    const container = createContainer();
    const h2 = createH2();
    const dishContent = [];
    const h3 = [];
    const p = [];
    const span = [];

    
    createDOMElements();
    fillDOMElements();
    appendToMain();
    content.append(main);


    function createMain() {
        return document.createElement('main');
    }
    
    function createMenu() {
        const menu = document.createElement('section');
        menu.classList.add('menu');
        return menu;
    }

    function createContainer() {
        const container = document.createElement('div');
        container.classList.add('container');
        return container;
    }
    
    function createH2() {
        const h2 = document.createElement('h2');
        h2.classList.add('main-title');
        h2.textContent = "Our Menu";
        return h2;
    }

    function createContent() {
        const dishContent = document.createElement('div');
        dishContent.classList.add('content');
        return dishContent;
    }

    function createH3() {
        return document.createElement('h3');
    }

    function createP() {
        return document.createElement('p');
    }

    function createSpan() {
        return document.createElement('span');
    }

    function createDOMElements() {
        for (let i = 0; i < 10; i++) {
            dishContent.push(createContent());
            h3.push(createH3());
            p.push(createP());
            span.push(createSpan());   
        }
    }

    function fillH3() {
        h3[0].textContent = "Bufalina";
        h3[1].textContent = "Campagnola";
        h3[2].textContent = "Parmigiana di Melanzane";
        h3[3].textContent = "Dolce Inferno";
        h3[4].textContent = "Prosciutto";
        h3[5].textContent = "Puttanesca";
        h3[6].textContent = "Margherita";
        h3[7].textContent = "Diavola";
        h3[8].textContent = "Sfoglia Patate";
        h3[9].textContent = "Braccio di Ferro";
    }

    function fillP() {
        p[0].textContent = "Mozzarella di Bufala, Tomato Sauce, Basil ";
        p[1].textContent = "Mela Verde, Pancetta Croccante, Formaggio di Capra, Mozzarella, Erba Cipollina, Miele Piccante ";
        p[2].textContent = "Eggplants, Parmigiano, Ricotta, Mozzarella, Tomato Sauce ";
        p[3].textContent = "Pepperoni, Sweet Gorgonzola, Nduja, Caramelized Tropea Onions, Mint, Tomato Sauce ";
        p[4].textContent = "Prosciutto di Parma, Mozzarella di Bufala, Cherry Tomatoes, Arugula ";
        p[5].textContent = "Marinated Sunset Medley Tomatoes, Calabrian Chili Peppers, Capers, Taggiasche Olives, Tomato Sauce ";
        p[6].textContent = "Mozzarella, Tomato Sauce, Parmigiano, Basil ";
        p[7].textContent = "Pepperoni, Mozzarella, Tomato Sauce ";
        p[8].textContent = "Potatoes, Rosemary, EVOO ";
        p[9].textContent = "Baby Spinach, Pecorino Romano Cheese, Mozzarella, Lemon ";
    }

    function fillSpan() {
        span[0].textContent = "$7.95";
        span[1].textContent = "$8.95";
        span[2].textContent = "$8.50";
        span[3].textContent = "$8.95";
        span[4].textContent = "$8.95";
        span[5].textContent = "$7.95";
        span[6].textContent = "$5.50";
        span[7].textContent = "$6.75";
        span[8].textContent = "$7.50";
        span[9].textContent = "$8.95";
    }

    function fillDOMElements() {
        fillH3();
        fillP();
        fillSpan();
    }

    function appendToP() {
        for (let i = 0; i < 10; i++) {
            p[i].append(span[i]);
        }
    }

    function appendToContent() {
        for (let i = 0; i < 10; i++) {
            dishContent[i].append(h3[i]);
            dishContent[i].append(p[i]);
        }
    }

    function appendToContainer() {
        container.append(h2);
        for (let i = 0; i < 10; i++) {
            container.append(dishContent[i]);
        }
    }

    function appendToMain() {
        appendToP();
        appendToContent();
        appendToContainer();
        menu.append(container);
        main.append(menu);
    }

}
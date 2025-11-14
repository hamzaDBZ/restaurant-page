export default function() {
    function createH2() {
        const h2 = document.createElement('h2');
        h2.classList.add('main-title');
        return h2;
    }

    function createContainer() {
        const container = document.createElement('div');
        container.classList.add('container');
        return container;
    }

    function aboutSection() {
        const about = createAbout();
        const h2 = createH2();
        const container = createContainer();
        const p = [];


        createPElements();
        fillPElements();
        appendToMain();


        function createAbout() {
            const about = document.createElement('section');
            about.classList.add('about');
            return about;
        }

        function createP() {
            return document.createElement('p');
        }

        function createPElements() {
            for (let i = 0; i < 4; i++) {
                p.push(createP());
            }
        }

        function fillPElements() {
            p[0].textContent = "At Yummy Slice, pizza isn't just food — it's our passion. Founded with a love for bold flavors, fresh ingredients, and the perfect crust, we're here to serve up slices that satisfy every craving.";
            p[1].textContent = "Whether you're grabbing a quick lunch, enjoying a family dinner, or feeding a late-night appetite, Yummy Slice brings you handcrafted pizzas made with care. From classic favorites like pepperoni and margherita to unique creations you won't find anywhere else, every bite is a taste of quality.";
            p[2].textContent = "We believe great pizza brings people together — and that's exactly what we aim to do every day. Stop by, grab a slice, and see why our customers keep coming back for more.";
            p[3].textContent = "Fresh. Flavorful. Always Yummy.";
        }

        function appendToContainer() {
            for (let i = 0; i < 4; i++) {
                container.append(p[i]);
            }
        }

        function appendToAbout() {
            h2.textContent = "About Us";
            about.append(h2);
            appendToContainer();
            about.append(container);
        }

        function appendToMain() {
            appendToAbout();
            main.append(about);
        }
    }

    function contactSection() {
        const contact = createContact();
        const h2 = createH2();
        const container = createContainer();
        const form = createForm();
        const h3 = [createH3(), createH3()];
        const address = createAddressDIV();


        appendToMain();


        function createContact() {
            const contact = document.createElement('section');
            contact.classList.add('contact');
            return contact;
        }

        function createForm() {
            return document.createElement('form');
        }

        function createH3() {
            return document.createElement('h3');
        }

        function createEmail() {
            const email = document.createElement('input');
            email.type = "email";
            email.placeholder = "Your Email";
            return email;
        }

        function createTextarea() {
            const textarea = document.createElement('textarea');
            textarea.placeholder = "Your Message";
            return textarea;
        }

        function createSubmit() {
            const submit = document.createElement('input');
            submit.type = "submit";
            submit.value = "Send Message";
            return submit;
        }

        function appendToForm() {
            h3[0].textContent = "Send a Message";
            form.append(h3[0]);
            form.append(createEmail());
            form.append(createTextarea());
            form.append(createSubmit());
        }

        function createAddressDIV() {
            const address = document.createElement('div');
            address.classList.add('address');
            return address;
        }

        function createAddress() {
            const address = document.createElement('address');
            address.innerHTML = "Awesome Address 17 <br> New York, NYC <br> 123-4567-890 <br> USA";
            return address;
        }

        function appendToAddressDIV() {
            h3[1].textContent = "Where We Are";
            address.append(h3[1]);
            address.append(createAddress());
        }

        function appendToContainer() {
            appendToForm();
            container.append(form);
            appendToAddressDIV();
            container.append(address);
        }

        function appendToContact() {
            h2.textContent = "Contcat Us";
            contact.append(h2);
            appendToContainer();
            contact.append(container);
        }

        function appendToMain() {
            appendToContact();
            main.append(contact);
        }

    }

    const content = document.querySelector('#content');
    const main = document.createElement('main');

    function render() {
        aboutSection();
        contactSection();
        content.append(main);
    }

    render();
}
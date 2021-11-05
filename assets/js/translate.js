var LanguageList = {
    "EN" : "English",
    "BG" : "Bulgarian",
  };
  
  //languages Objects
  var WORDS_EN = {
    "home" : "Home",
    "about" : "About",
    "services" : "Services",
    "works" : "Works",
    "contact" : "Contact",
    "portfolio": "My Portfolio",
    "client":"Client: ",
    "date":"Date: ",
    "online":"Online: ",
    "techology": "Technologies: ",
    "source": "Source Code: ",
    "projectDetails" :"Project Details",
    "blazorProject": "This project is develop on the Blazor on client ASP Host, the API client is implemented which accepts a model via Apiresponse class. Cloudinary Image Provider as well as Sendgrid EmailSender, Automapper and Jwt Token.",
    "razorProject": "The project is develop on ASP.NET-Core Razor Pages implemented Factory Patern who reads JSON files and feeds them on UI, Implemented Sendgrid Email Sender and Google Recaptcha.",
    "judoBurgas": "The site is made for Judo and Sambo Sports Club. Programmed is entirely on HTML and CSS.",
    "fabulas" : "The site is programmed on ASP.NET Core MVC technology.",
    "folow": "Folow Me",
    "latest": "Latest Projects",
    "questions": "Have a Questions?",
    "helloAndWelcome" : "Hello & welcome",
    "ImNesho" : "I`m Nesho Neshev",
    "learnMore":"Learn More",
    "downloadCv":"Download CV",
    "about":"About Me",
    "aboutInfo":"Hello, my name is Nesho Neshev. I am a freelance designer and web developer. I have a passion for detail and I love challenges. I was born in Burgas in October, 1978, and I live in Burgas / Bulgaria. I graduated from @ Software University in Bulgaria, where I discovered that my passion for problem solving and programming in general.",
    "courses":"My Courses",
    "aspNetCore":"In this course I learned Razor Views, Application Flow, Filters & Middleware, Model Binding, Model Validation, Working with Files, Web API, Unit Testing, Mocking, Integration Testing, Selenium, Web Application Designs, Web Application Architectures, Repository Pattern, AutoMapper, WebHost, Logging; Cache, Sessions, GDPR, SignalR, Azure, Deployment & CI and Blazor.",
    "webBasic":"In this course I learned HTTP Protocol, Asynchronous Processing,State Management Basic MVC, MVC View Engine, MVC Advanced - IoC and Data Binding and create own Web Server.",
    "algorithm":"In this course I learned Recursion and Backtracking, Searching, Sorting and Greedy algorithms, Graph Theory, Traversal, Shortest Paths and Dynamic Programming.",
    "dataStructure":"In this course I learned Abstract Data Structures (ADS) and implementations, Algorithmic complexity, Analyzing algorithms complexity, Memory heirarchy, Linear Data Structures, Dynamic Arays, Queues, Stack, Basic Tree structures BFS and DFS traversal, Min and Max Heaps, Binary Search Trees and Balanced Trees.",
    "oop":"This course gave me in-depth knowledge of the four principles of object-oriented programming encapsulation, abstraction, inheritance, and polymorphism and SOLID principies.",
    "efCore":"In this course I learned relational databases as well as working with ADO.NET, Entity Framework Core, LINQ, Data Transfer Objects, AutoMapper, JSON and XML.",
    "msSql":"In this course I gained in-depth knowledge of relational database, CRUD oparations, Functions, Stored Procedures, Transactions and Triggers.",
    "fundMathematics": "In this course I learned Numeral Systems, Coordinate System, Mathematical Induction, Graph Theory, Logics and Logical Operators, Boolean Algebra, Probability, Statistics, Combinatorics, Logarithmus, Logarithmus Funcitons, Complex Numbers and Exponential Growth and Decay.",
    "apiScenarios": "In this course I learned Soap, Rest, OData, GraphQL, API Types, General Advice for API Design, API Styles Comparison.",
    "mySkills": "My skills",
    "letsWork": "Let's work together",
    "github":"My Github",
    "linkedin":"My Linkedin",
    "myWork":"My Works",
    "all":"All",
    "webDesign": "Web Design",
    "projects": "Projects",
    "seeWorks":"Want to see more works?",
    "interestedProjects":"I am always open to interesting projects.",
    "myPortfolio":"Lets view my portfolio",
    "contactMe":"Contact Me",
    "adress":" 11 Street. Georgi Kirkov, Burgas, Bulgaria",
    "webHost": "Hosting"
  };
  
  var WORDS_BG = {
    "home" : "Начало",
    "about" : "За мен",
    "services" : "Услуги",
    "works" : "Проекти",
    "contact" : "Контакти",
    "portfolio": "Портфолио",
    "client":"Клиент: ",
    "date":"Дата: ",
    "online":"Онлайн: ",
    "techology": "Технология: ",
    "source": "Сорс код: ",
    "projectDetails" :"Детайли за проекта",
    "blazorProject":"Този проект е разработен на Blazor on client ASP Host, Внедрен е API client , който приема модел чрез клас Apiresponse. Cloudinary Image Provider, както и Sendgrid EmailSender, Automapper и Jwt Token.",
    "razorProject":"Проектът е разработен на ASP.NET-Core Razor Pages, имплементиран е Factory Patern, който чете JSON файлове и захранва потребителския интерфейс, внедрени са Sendgrid Email Sender и Google Recaptcha.",
    "judoBurgas": "Сайтът е изработен за Спортен Клуб по Джудо и Самбо гр.Бургас. Програмиран е изцяло на HTML и CSS.",
    "fabulas" : "Сайтът е изработен на ASP.NET Core MVC.",
    "folow": "Последвайте ме",
    "latest": "Последни проекти",
    "questions": "Имате Въпроси?",
    "helloAndWelcome": "Здравейте,",
    "ImNesho" : "Аз съм Нешо Нешев,",
    "learnMore": "За мен",
    "downloadCv":"Моето Cv",
    "about":"За Мен",
    "aboutInfo":"Здравейте, казвам се Нешо Нешев. Аз съм дизайнер на свободна практика и уеб разработчик. Имам страст към детайлите и обичам предизвикателствата. Роден съм в Бургас през октомври 1978 г. и живея в Бургас / България. Завърших @ Software University в България, където открих страстта си към решаването на проблеми и програмирането като цяло.",
    "courses": "Моите Курсове",
    "aspNetCore":"В този курс научих Razor Views, Application Flow, Filters & Middleware, Model Binding, Model Validation, Work with Files, Web API, Unit Testing, Mocking, Integration Testing, Selenium, Web Application Designs, Web Application Architecture, Repository Pattern, AutoMapper, WebHost, Logging; Cache, Sessions, GDPR, SignalR, Azure, Deployment & CI and Blazor.",
    "webBasic":"В този курс научих HTTP Protocol, Asynchronous Processing,State Management Basic MVC, MVC View Engine, MVC Advanced - IoC, Data Binding и създаване на собствен Web Server",
    "algorithm":"В този курс научих Рекурсия, Търсене, Сортиране и Greedy алгоритми, Теория на графите, Traversal, Най-кратките пътища и Динамично програмиране.",
    "dataStructure":"В този курс научих Абстрактни структури от данни (ADS) и имплементирането им, Сложност на алгоритмите, Анализиране на сложността на алгоритмите, Memory heirarchy, Линейни структури от данни, Динамични масиви, Опашки, Стекове,Основни дървовидни структури обхождане с BFS и DFS , Min and Max Heaps, Дървета за двоично търсене и Балансирани дървета.",
    "oop":"Този курс ми даде задълбочени познания за четирите принципа на обектно-ориентирано програмиране: капсулиране, абстракция, наследяване и полиморфизъм както SOLID принципите.",
    "efCore":"В този курс научих Релационите бази от данни както и да работя с ADO.NET, Entity Framework Core, LINQ, Data Transfer Objects, AutoMapper, JSON и XML.",
    "msSql":"В този курс получих задълбочени познания за релационна база данни, CRUD операции, функции, съхранени процедури, транзакции и тригери.",
    "fundMathematics":"В този курс научих числени системи, координатна система, математическа индукция, теория на графите, логика и логически оператори, булева алгебра, вероятности, статистика, комбинаторика, логаритъм, функции на  логаритми, комплексни числа и експоненциален растеж и упадък.",
    "apiScenarios":"В този курс Soap, Rest, OData, GraphQL, API Types, General Advice for API Design, API Styles Comparison.",
    "mySkills": "Моите умения",
    "letsWork":"Искате ли да работим заедно",
    "github":"Моят Гитхъб",
    "linkedin":"Моят Линкедин",
    "myWork":"Моите проекти",
    "all":"Всички",
    "webDesign": "Уеб дизайн",
    "projects": "Проекти",
    "seeWorks":"Искате ли да видите още проекти?",
    "interestedProjects":"Винаги съм отворен за интересни проекти.",
    "myPortfolio":"Нека разгледаме моето портфолио",
    "contactMe":"Свържете се с мен",
    "adress":" Улица Георги Кирков 11, Бургас, България",
    "webHost": "Хостинг"
  };
  
  window.onload = initialize;
  
  function initialize() {
    var $dropdown = $("#country_select");    
    $.each(LanguageList, function(key, value) {
      $dropdown.
        append($("<option/>").
        val(key).
        text(value));
      });
      
    
  }
  
  function loadsLanguage(lang){
    /*fills all the span tags with class=lang pattern*/ 
    $('[id^="lang"]').each(function(){
      var LangVar = (this.id).replace('lang-','');
      var Text = window["WORDS_"+lang][LangVar];
      $(this).text(Text);        
    });
  }
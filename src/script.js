const DOM_ARTICLE_CONTENT = document.querySelector('#article-content');

const articleList = [
  {
    title: 'Golang Custom Type Implementation to Big Framework',
    subtitle: 'Use Case and Implementation of Custom Type',
    published_at: '12 Feb, 2023',
    published_on: 'Medium',
    img: './assets/article-8.jpg',
    link: 'https://david-yappeter.medium.com/golang-custom-type-implementation-to-big-framework-4b9240ae992e',
  },
  {
    title: 'HTML to PDF CV Maker',
    subtitle: 'Create your own CV From HTML CSS only',
    published_at: 'Jul 8, 2022',
    published_on: 'Medium',
    img: './assets/article-7.png',
    link: 'https://david-yappeter.medium.com/html-to-pdf-cv-maker-b1f424764fbb',
  },
  {
    title: 'Context in Go Programming — Part 1',
    subtitle: 'Basic Usage of Context — WithValue',
    published_at: 'Nov 12, 2021',
    published_on: 'Medium',
    img: './assets/article-6.png',
    link: 'https://david-yappeter.medium.com/context-in-go-programming-part-1-3a8d470617d0',
  },
  {
    title: 'Dockerize Go Application Easily',
    subtitle: '3 Examples with 3 different results. . .',
    published_at: 'Oct 6, 2021',
    published_on: 'Medium',
    img: './assets/article-5.png',
    link: 'https://david-yappeter.medium.com/dockerize-go-application-easily-cf6776d5c05e',
  },
  {
    title: 'init() in Go Programming',
    subtitle: 'Order Execution of init()',
    published_at: 'Oct 1, 2021',
    published_on: 'Medium',
    img: './assets/article-4.jpeg',
    link: 'https://david-yappeter.medium.com/init-in-go-programming-31e2c2bc2371',
  },
  {
    title: 'Golang Database Integration Test with Github Action',
    subtitle: 'MySQL Integration Test Made Easy with Github Action',
    published_at: 'Sep 11, 2021',
    published_on: 'Medium',
    img: './assets/article-3.png',
    link: 'https://david-yappeter.medium.com/golang-database-integration-test-with-github-action-8d215c3da550',
  },
  {
    title: 'Golang MySQL Integration Test',
    subtitle:
      'Integration Test with testify Suite, sure you’re gonna need it …',
    published_at: 'Sep 6, 2021',
    published_on: 'Medium',
    img: './assets/article-2.png',
    link: 'https://david-yappeter.medium.com/golang-mysql-integration-test-433a2b00dbfe',
  },
  {
    title: 'Golang Pass by value vs Pass by reference',
    subtitle: 'Basic of Golang Pointer',
    published_at: 'Aug 30, 2021',
    published_on: 'Medium',
    img: './assets/article-1.png',
    link: 'https://david-yappeter.medium.com/golang-pass-by-value-vs-pass-by-reference-e48aac8b2716',
  },
];

function onScroll() {
  if (window.scrollY > 0) {
    document.querySelector('#header').classList.remove('at-top');
  } else {
    document.querySelector('#header').classList.add('at-top');
  }
}

function buildArticle({
  title,
  subtitle,
  published_at,
  published_on,
  img,
  link,
}) {
  const articleLink = document.createElement('a');
  articleLink.classList.add('article-link');
  articleLink.setAttribute('href', link);

  articleLink.innerHTML = `
  <article class="article-container">
    <img class="article-image" src="${img}"></img>
    <div>
      <p class="text-sm text-center lg:text-left mb-0">${published_at} <span class="hidden lg:block">(Published on ${published_on})</span></p>
      <h3 class="text-center lg:text-left">${title}</h3>
      <p class="text-center lg:text-left">${subtitle}</p>
    </div>
  </article>
  `;

  DOM_ARTICLE_CONTENT.appendChild(articleLink);
}

document.addEventListener('DOMContentLoaded', function () {
  // on scroll
  onScroll();
  document.addEventListener('scroll', onScroll);

  // article
  articleList.forEach(buildArticle);

  // global icon button
  document.querySelectorAll('.navbar-bar-icon').forEach((dom) => {
    dom.addEventListener('click', function () {
      document
        .getElementById(dom.getAttribute('for'))
        .classList.toggle('mobile-open');
    });
  });
});

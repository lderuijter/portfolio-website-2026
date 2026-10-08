<template>
  <h1 class="page-heading">Home</h1>

  <div class="about-me-container">
    <div class="lucas-image-container">
      <div class="circle-image">
        <img src="/assets/images/lucas.png" alt="profile">
      </div>
    </div>
    <div class="about-me-text">
      <h2>Lucas de Ruijter</h2>
      <p>
        Ik heb altijd al interesse gehad in de ICT-sector en ik vind het leuk om te programmeren.
        Ik ben iemand die oplossingsgericht is ingesteld. Verder houd ik van uitdagend werk.
        Ook ben ik heel nauwkeurig en word ik omschreven als een echte doorzetter.
        Ik ben sterk gemotiveerd om innovatieve en functionele applicaties en websites te
        ontwikkelen met een leuk softwareteam.
      </p>
    </div>
    <div class="about-me-icons">
      <a target="_blank" rel="noopener" href="https://github.com/lderuijter" aria-label="GitHub">
        <i class="fa-brands fa-github"></i>
      </a>
      <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/lucas-de-ruijter-61211a215/" aria-label="LinkedIn">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  </div>

  <h2 class="project-preview-header">Projects preview</h2>

  <div class="project-preview-container">
    <div class="preview-image project-1">
      <img src="https://lucasderuijter.vercel.app/public/generate-form.png" alt="preview-project">
    </div>
    <div class="preview-image project-2">
      <img src="/assets/images/leanbatch.png" alt="preview-project">
    </div>
    <div class="preview-button">
      <RouterLink to="/projects">
        <p>View more</p>
      </RouterLink>
    </div>
  </div>
</template>

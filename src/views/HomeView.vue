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
        Sinds jongs af aan heb ik veel interesse in de ICT-sector. Ik heb
        affiniteit met programmeren en ik ben oplossingsgericht
        ingesteld. Ik word beschreven als een echte doorzetter die houdt
        van uitdagend werk. Ik ben sterk gemotiveerd om innovatieve en
        functionele webapplicaties te ontwikkelen met een gehecht
        softwareteam.
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
      <img src="/assets/images/reyez.png" alt="preview-project">
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

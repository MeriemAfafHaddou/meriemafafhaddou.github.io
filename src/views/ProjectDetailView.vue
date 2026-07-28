<template>
  <div v-if="project" class="project-detail">
    <!-- Back -->
    <div class="back-bar">
      <div class="container">
        <RouterLink to="/projects" class="back-link">
          <span class="material-symbols-outlined icon">arrow_back</span>
          All Projects
        </RouterLink>
      </div>
    </div>

    <!-- Hero -->
    <div class="project-hero dot-grid">
      <div class="container">
        <div class="project-hero-badges">
          <span v-if="project.context" class="badge-context">
            {{ project.context.type }}
          </span>
          <span
            v-for="cat in project.category"
            :key="cat"
            class="badge badge-beige"
          >
            {{ cat }}
          </span>
        </div>
        <h1 class="project-hero-title display">{{ project.name }}</h1>
        <p class="project-hero-summary">{{ project.overview }}</p>
        <div class="project-hero-techs">
          <span v-for="tech in project.techs" :key="tech" class="tech-chip">{{ tech }}</span>
        </div>
      </div>
    </div>
    <!-- Body -->
    <div class="project-body">
      <div class="container container--narrow">
        <section v-if="project.gallery?.length" class="project-section">
          <h2 class="project-section-title">Preview</h2>

          <div class="image-viewer card">

            <!-- Image -->
            <div class="image-container">
              <img
                v-if="currentImage"
                :src="currentImage.src"
                class="viewer-image"
                :alt="currentImage.title"
              />
            </div>

            <!-- Caption -->
            <div class="image-caption">
              <div v-if="currentImage" class="image-title">
                {{ currentImage.title }}
              </div>

              <div class="image-counter">
                {{ currentImageIndex + 1 }} / {{ project.gallery.length }}
              </div>
            </div>

            <!-- Controls -->
            <div class="image-controls">
              <button class="icon-btn" @click="prevImage">
                <span class="material-symbols-outlined">chevron_left</span>
              </button>

              <button class="icon-btn" @click="nextImage">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

          </div>
        </section>
        <!-- Problem/Overview -->
        <section class="project-section">
          <h2 class="project-section-title">The Problem</h2>
          <p class="project-text">{{ project.problem }}</p>
        </section>

        <!-- Architecture -->
        <section class="project-section">
          <h2 class="project-section-title">Architecture & Implementation</h2>
          <p class="project-text" style="margin-bottom: 20px">{{ project.architecture }}</p>

          <div class="decision-list">
            <h3 class="decision-title">Technical decisions</h3>
            <ul>
              <li v-for="(d, i) in project.technicalDecisions" :key="i" class="decision-item">
                <span class="decision-marker mono">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="decision-text">{{ d }}</span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Features -->
        <section class="project-section">
          <h2 class="project-section-title">Key Features</h2>
          <div class="features-grid">
            <div v-for="(feat, i) in project.features" :key="i" class="feature-item card">
              <span class="feature-icon">✦</span>
              <span class="feature-text">{{ feat }}</span>
            </div>
          </div>
        </section>

        <!-- Technologies -->
        <section class="project-section">
          <h2 class="project-section-title">Technologies Used</h2>
          <div class="tech-chips-row">
            <span v-for="tech in project.techs" :key="tech" class="tech-chip">{{ tech }}</span>
          </div>
        </section>

        <!-- Note -->
        <section  v-if="project.note" class="project-section">
          <h2 class="project-section-title">Note</h2>
          <p class="project-note">
            <span class="material-symbols-outlined project-note-icon">info</span>
            {{ project.note }}
          </p>
        </section>

        <!-- Links -->
        <section v-if="hasLinks" class="project-section">
          <h2 class="project-section-title">Links</h2>
          <div class="project-links">
            <a v-if="project.links.source" :href="project.links.source" target="_blank" rel="noopener"
              class="btn btn-secondary">
              <span class="material-symbols-outlined icon">code</span>
              View Source Code
            </a>
            <a v-if="project.links.demo" :href="project.links.demo" target="_blank" rel="noopener" class="btn btn-secondary">
              <span class="material-symbols-outlined icon">launch</span>
              Live Demo
            </a>

            <a v-if="project.links.docs" :href="project.links.docs" target="_blank" rel="noopener"
              class="btn btn-secondary">
              <DocIcon /> Manuscript
            </a>
          </div>
        </section>
      </div>
    </div>

    <!-- Next/Prev nav -->
    <div class="project-nav-bar">
      <div class="container project-nav-inner">
        <RouterLink v-if="prevProject" :to="`/projects/${prevProject.slug}`" class="project-nav-link">
          <span class="material-symbols-outlined icon">chevron_left</span>
          <div>
            <span class="project-nav-label">Previous</span>
            <span class="project-nav-name">{{ prevProject.name }}</span>
          </div>
        </RouterLink>
        <div v-else></div>
        <RouterLink v-if="nextProject" :to="`/projects/${nextProject.slug}`"
          class="project-nav-link project-nav-link--right">
          <div>
            <span class="project-nav-label">Next</span>
            <span class="project-nav-name">{{ nextProject.name }}</span>
          </div>
          <span class="material-symbols-outlined icon">chevron_right</span>
        </RouterLink>
      </div>
    </div>
  </div>

  <!-- 404 -->
  <div v-else class="not-found">
    <div class="container">
      <p class="section-label">Error</p>
      <h1 class="page-title display">Project not found</h1>
      <RouterLink to="/projects" class="btn btn-primary" style="margin-top: 20px">← Back to projects</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/data.js'
import { ref } from 'vue'

const route = useRoute()
const project = computed(() => projects.find(p => p.slug === route.params.slug))
const currentIndex = computed(() => projects.findIndex(p => p.slug === route.params.slug))
const prevProject = computed(() => currentIndex.value > 0 ? projects[currentIndex.value - 1] : null)
const nextProject = computed(() => currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null)
const hasLinks = computed(() => project.value && Object.values(project.value.links).some(Boolean))
const currentImageIndex = ref(0)

const currentImage = computed(() => {
  const gallery = project.value?.gallery
  if (!gallery || !gallery.length) return null
  return gallery[currentImageIndex.value] || gallery[0]
})

const nextImage = () => {
  if (!project.value?.gallery) return
  currentImageIndex.value =
    (currentImageIndex.value + 1) % project.value.gallery.length
}

const prevImage = () => {
  if (!project.value?.gallery) return
  currentImageIndex.value =
    (currentImageIndex.value - 1 + project.value.gallery.length) %
    project.value.gallery.length
}

watch(project, () => {
  currentImageIndex.value = 0
})

</script>

<style scoped>
.back-bar {
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition);
}

.back-link:hover {
  color: var(--text);
  opacity: 1;
}

/* Hero */
.project-hero {
  padding: 60px 0 56px;
  border-bottom: 1px solid var(--border);
}

.project-hero-badges {
  margin-bottom: 16px;
}

.project-hero-title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 400;
  color: var(--text);
  margin-bottom: 16px;
}

.project-hero-summary {
  font-size: 17px;
  color: var(--text-muted);
  max-width: 640px;
  line-height: 1.7;
  margin-bottom: 24px;
}

.project-hero-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Body */
.project-body {
  padding: 64px 0;
}

.project-section {
  margin-bottom: 20px;
}

.project-section-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.project-text {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.75;
}

/* Decision list */
.decision-list {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 20px;
}

.decision-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-subtle);
  margin-bottom: 14px;
}

.decision-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.65;
}

.decision-item:last-child {
  border-bottom: none;
}

.decision-marker {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.decision-text {
  flex: 1;
}

/* Features grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.55;
}

.feature-icon {
  color: var(--accent);
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Tech chips row */
.tech-chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Links */
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Next/Prev nav */
.project-nav-bar {
  border-top: 1px solid var(--border);
  padding: 32px 0;
}

.project-nav-inner {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.project-nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-muted);
  transition: color var(--transition);
  max-width: 240px;
}

.project-nav-link:hover {
  color: var(--text);
  opacity: 1;
}

.project-nav-link--right {
  text-align: right;
}

.project-nav-label {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-subtle);
  margin-bottom: 2px;
}

.project-nav-name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  font-family: 'JetBrains Mono', monospace;
}

.not-found {
  padding: 80px 0;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--text);
  margin: 4px 0 12px;
}

.image-viewer {
  position: relative;
  padding: 18px;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.image-container {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  background: var(--bg);
}

.viewer-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

.image-caption {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  margin-top: 12px;
  align-items: start;
}

.image-title {
  font-weight: 400;
  color: var(--text);
}

.image-counter {
  font-family: monospace;
  font-size: 12px;
  color: var(--text-subtle);

  white-space: nowrap;
  min-width: 40px;
  text-align: right;
}

.image-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  transform: translateY(-50%);
  pointer-events: none;
}

.icon-btn {
  pointer-events: all;
  background: var(--bg);
  border: 1px solid var(--border);
  width: 38px;
  height: 38px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  background: var(--bg-subtle);
  transform: scale(1.05);
}

.project-note {
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  gap: 8px;

  padding: 10px 12px;
  border-radius: 10px;

  font-size: 14px;
  line-height: 1.5;

  color: var(--text-muted);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.project-note-icon {
  font-size: 18px;
  color: var(--text-muted);
  margin-top: 1px;
}

.dark .project-note {
  background: rgba(148, 163, 184, 0.06);
  border-color: rgba(148, 163, 184, 0.12);
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .project-nav-inner {
    flex-direction: column;
  }
}
</style>
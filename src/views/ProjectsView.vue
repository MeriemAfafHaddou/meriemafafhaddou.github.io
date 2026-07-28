<template>
  <div class="projects-page">
    <!-- HERO -->
    <div class="page-hero">
      <div class="container hero-row">
        <div>
          <p class="section-label">Work</p>
          <h1 class="page-title display">Projects</h1>
          <p class="page-subtitle">
            A selection of systems, tools, and applications I've built.
          </p>
        </div>
      </div>
    </div>
    <div class="filters-wrapper">
      <div class="container">
        <div class="filters">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>

    <!-- GRID -->
    <section class="section">
      <div class="container">
        <TransitionGroup name="project-list" tag="div" class="projects-grid">
          <RouterLink v-for="project in filteredProjects" :key="project.id" :to="`/projects/${project.slug}`"
            class="project-card">

            <!-- TOP ROW: icon + categories -->
            <div class="project-top">
              <div class="project-icon">
                <span class="material-symbols-outlined">
                  {{ project.icon || 'folder' }}
                </span>
              </div>

              <div class="project-categories">
                <span v-if="project.context" class="badge-context">
                  {{ project.context.type }}
                </span>
                <span v-for="cat in project.category" :key="cat" class="category-chip">
                  {{ cat }}
                </span>
              </div>
            </div>

            <!-- CONTENT -->
            <div class="project-content">
              <h3 class="project-name">{{ project.name }}</h3>

              <p class="project-desc">
                {{ project.shortDescription }}
              </p>
            </div>

            <!-- TECH STACK -->
            <div class="project-techs">
              <span v-for="tech in project.techs" :key="tech" class="tech-chip">
                {{ tech }}
              </span>
            </div>

            <!-- FOOTER -->
            <div class="project-footer">
              <span class="project-link-hint">View project →</span>
            </div>

          </RouterLink>
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/data.js'

const ALL = 'All'

const categories = [
  ALL,
  ...new Set(projects.flatMap(p => p.category))
]

const activeCategory = ref(ALL)

const filteredProjects = computed(() =>
  activeCategory.value === ALL
    ? projects
    : projects.filter(p =>
      p.category.includes(activeCategory.value)
    )
)
</script>
<style scoped>
/* HERO */
.page-hero {
  padding: 72px 0 40px;
}

.hero-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.page-title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
}

.page-subtitle {
  color: var(--text-muted);
  max-width: 620px;
  line-height: 1.6;
}

/* FILTERS (top-right chips) */

.filters-wrapper {
  padding: 18px 0;
  margin-bottom: 28px;

  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: transparent;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
}

.filter-btn {
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;
  text-transform: capitalize;
}

.filter-btn:hover {
  border-color: var(--beige-500);
  color: var(--beige-500);
}

.filter-btn.active {
  background: var(--beige-500);
  color: white;
  border-color: var(--beige-500);
}

.dark .filter-btn {
  background: var(--bg-subtle);
  color: #cbd5e1;
}

.dark .filter-btn:hover {
  background: rgba(59, 130, 246, 0.08);
  color: white;
}

.dark .filter-btn.active {
  background: var(--beige-500);
  color: white;
}

/* GRID */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 22px;
}

/* CARD */
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 260px;

  padding: 24px;
  border-radius: 16px;

  text-decoration: none;
  color: inherit;

  background: var(--card-bg);
  border: 1px solid var(--border);

  transition: all 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--beige-500);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* HEADER */
.project-header {
  display: flex;
  gap: 14px;
}

/* ICON BIGGER */
.project-icon {
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.project-icon .material-symbols-outlined {
  font-size: 32px;
  color: var(--beige-500);
}

/* TITLE BIGGER */
.project-name {
  font-size: 18px;
  font-weight: 650;
  margin: 0;
}

.project-desc {
  font-size: 13px;
  margin-top: 6px;
  color: var(--text-muted);
  line-height: 1.6;
}

/* BADGES */
.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.badge {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.08);
  color: var(--beige-500);
}

/* TECH STACK (FULL, WRAPPED) */
.project-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.tech-chip {
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;

  background: var(--bg-subtle);
  border: 1px solid var(--border);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
}

.project-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-end;
  max-width: 85%;
}

.category-chip {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;

  text-transform: capitalize;
  letter-spacing: 0.2px;

  font-weight: 500;
  border: 1px solid;
  margin: 0 2px;

  background: var(--accent-bg);
  color: var(--accent);
  border-color: rgba(59,130,246,0.2);
}
/* FOOTER */
.project-footer {
  margin-top: auto;
  padding-top: 16px;

  display: flex;
  justify-content: flex-end;
}

.project-link-hint {
  color: var(--beige-500);
  font-weight: 500;
  font-size: 13px;
}

/* TRANSITION */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.25s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>
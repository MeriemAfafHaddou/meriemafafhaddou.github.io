<template>
  <header class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <div class="nav-inner container">
      <RouterLink to="/" class="nav-logo" aria-label="Home">
        <span class="nav-logo-mark">MH</span>
        <span class="nav-logo-name">Meriem Afaf Haddou</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="nav-links" aria-label="Main navigation">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ 'nav-link--active': isActive(link.to) }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="nav-actions">
        <button class="theme-toggle btn-ghost btn" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <span class="material-symbols-outlined">
            {{ isDark ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>
        <button class="hamburger btn-ghost btn" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Toggle menu">
          <span class="material-symbols-outlined">
            {{ menuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="mobile-menu">
        <nav class="mobile-nav">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="mobile-nav-link"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' }
]

const isActive = (to) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

const onScroll = () => { isScrolled.value = window.scrollY > 20 }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-height);
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}
.nav--scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 1px 12px rgba(0,0,0,0.05);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
  font-size: 15px;
  flex-shrink: 0;
}
.nav-logo:hover { opacity: 1; }
.nav-logo-mark {
  width: 32px;
  height: 32px;
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}
.nav-logo-name {
  color: var(--text);
  transition: color var(--transition);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: center;
}
.nav-link {
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition), background var(--transition);
}
.nav-link:hover {
  color: var(--text);
  background: var(--bg-subtle);
  opacity: 1;
}
.nav-link--active {
  color: var(--text);
  background: var(--bg-subtle);
}
.nav-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}
.theme-toggle, .hamburger {
  color: var(--text-muted);
}
.hamburger { display: none; }

/* Mobile menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0; right: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: 12px 24px 20px;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.mobile-nav-link {
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition), background var(--transition);
}
.mobile-nav-link:hover {
  color: var(--text);
  background: var(--bg-subtle);
  opacity: 1;
}
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 640px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .nav-logo-name { display: none; }
}
</style>
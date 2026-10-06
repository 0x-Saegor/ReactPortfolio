import { Home, User, Hammer, Sun, Moon, Github, Edit3 } from "lucide-react";
import { NavLink } from "react-router-dom";
import useTheme from "../../utils/hooks";

const itemClass =
  "group relative flex items-center justify-center rounded-full p-2.5 transition-colors duration-200";

// Petite étiquette qui apparaît au survol, à droite de la barre (desktop)
function Tooltip({ children }) {
  return (
    <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-bg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
      {children}
    </span>
  );
}

function NavItem({ to, label, icon }) {
  const Icon = icon;
  return (
    <NavLink
      to={to}
      end
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={({ isActive }) =>
        `${itemClass} ${
          isActive
            ? "bg-accent text-on-accent shadow-soft"
            : "text-muted hover:bg-accent-soft hover:text-accent"
        }`
      }
    >
      <Icon size={22} strokeWidth={1.8} />
      <Tooltip>{label}</Tooltip>
    </NavLink>
  );
}

function ExternalItem({ href, label, icon }) {
  const Icon = icon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${itemClass} text-muted hover:bg-accent-soft hover:text-accent`}
    >
      <Icon size={22} strokeWidth={1.8} />
      <Tooltip>{label}</Tooltip>
    </a>
  );
}

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-50 flex flex-row items-center justify-around border-t border-line bg-surface/90 px-2 py-2 backdrop-blur-md md:inset-x-auto md:bottom-auto md:left-6 md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-3 md:rounded-full md:border md:px-2 md:py-3 md:shadow-soft"
    >
      <NavItem to="/" label="Accueil" icon={Home} />
      <NavItem to="/about" label="À propos" icon={User} />
      <NavItem to="/projects" label="Projets" icon={Hammer} />

      <span className="hidden h-px w-6 bg-line md:block" aria-hidden="true" />

      <ExternalItem href="https://github.com/0x-Saegor" label="GitHub" icon={Github} />
      <ExternalItem href="https://blog.arthurlg.fr" label="Blog" icon={Edit3} />

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "Passer au thème sombre" : "Passer au thème clair"}
        className={`${itemClass} cursor-pointer text-muted hover:bg-accent-soft hover:text-accent`}
      >
        {theme === "light" ? <Moon size={22} strokeWidth={1.8} /> : <Sun size={22} strokeWidth={1.8} />}
        <Tooltip>{theme === "light" ? "Thème sombre" : "Thème clair"}</Tooltip>
      </button>
    </nav>
  );
};

export default Header;

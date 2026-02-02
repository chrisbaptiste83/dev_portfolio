// Import and register all Stimulus controllers

import { application } from "./application"

import HelloController from "./hello_controller"
import NavbarController from "./navbar_controller"
import ThemeController from "./theme_controller"
import ScrollController from "./scroll_controller"

application.register("hello", HelloController)
application.register("navbar", NavbarController)
application.register("theme", ThemeController)
application.register("scroll", ScrollController)

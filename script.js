// Datos del menú
const menuItems = [
  {
    name: "Espresso Supremo",
    price: "$8",
    description: "Granos selectos de Colombia, tostado artesanal",
    icon: "fas fa-coffee",
  },
  {
    name: "Cappuccino Dorado",
    price: "$12",
    description: "Espuma de leche premium con polvo de oro comestible",
    icon: "fas fa-mug-hot",
  },
  {
    name: "Cold Brew Reserva",
    price: "$15",
    description: "Extracción en frío de 24 horas, granos etíopes",
    icon: "fas fa-glass-whiskey",
  },
  {
    name: "Macchiato Imperial",
    price: "$14",
    description: "Caramelo de vainilla Madagascar y crema batida",
    icon: "fas fa-coffee",
  },
  {
    name: "Mocha Belga",
    price: "$16",
    description: "Chocolate belga 70% cacao y café de Jamaica",
    icon: "fas fa-mug-hot",
  },
  {
    name: "Affogato Luxury",
    price: "$18",
    description: "Helado de vainilla bourbon con espresso doble",
    icon: "fas fa-ice-cream",
  },
]

// Métodos de extracción
const extractionMethods = [
  {
    name: "V60",
    time: "3-4 min",
    temp: "92-96°C",
    description: "Filtrado manual japonés para sabores limpios",
    icon: "fas fa-filter",
  },
  {
    name: "Chemex",
    time: "4-6 min",
    temp: "93-96°C",
    description: "Extracción suave con filtros especiales",
    icon: "fas fa-flask",
  },
  {
    name: "French Press",
    time: "4 min",
    temp: "93°C",
    description: "Inmersión completa para cuerpo intenso",
    icon: "fas fa-coffee",
  },
  {
    name: "Aeropress",
    time: "2-3 min",
    temp: "85-92°C",
    description: "Presión controlada para máxima extracción",
    icon: "fas fa-compress",
  },
]

// Inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  generateMenuItems()
  generateExtractionMethods()
  createCoffeeBeans()
  updateTime()
  setInterval(updateTime, 1000)

  // Animaciones de entrada
  animateOnScroll()
})

// Generar items del menú
function generateMenuItems() {
  const menuGrid = document.getElementById("menuGrid")

  menuItems.forEach((item, index) => {
    const menuCard = document.createElement("div")
    menuCard.className =
      "card-hover bg-gradient-to-br from-stone-800 to-stone-900 border border-amber-700/30 rounded-lg p-6 transform transition-all duration-300"
    menuCard.style.animationDelay = `${index * 0.1}s`

    menuCard.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-center gap-3">
                    <i class="${item.icon} text-2xl text-amber-400"></i>
                    <h3 class="text-xl font-semibold text-amber-300">${item.name}</h3>
                </div>
                <span class="text-2xl font-bold text-coffee-gold">${item.price}</span>
            </div>
            <p class="text-stone-300 leading-relaxed mb-4">${item.description}</p>
            <div class="flex items-center justify-between">
                <div class="flex space-x-1">
                    ${Array(5).fill('<i class="fas fa-star text-amber-400 text-sm"></i>').join("")}
                </div>
                <button onclick="addToOrder('${item.name}')" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
                    <i class="fas fa-plus mr-1"></i>Agregar
                </button>
            </div>
        `

    menuGrid.appendChild(menuCard)
  })
}

// Generar métodos de extracción
function generateExtractionMethods() {
  const extractionGrid = document.getElementById("extractionGrid")

  extractionMethods.forEach((method, index) => {
    const methodCard = document.createElement("div")
    methodCard.className =
      "card-hover bg-gradient-to-b from-amber-900/20 to-stone-900/50 border border-amber-600/30 rounded-lg p-6 text-center transform transition-all duration-300"
    methodCard.style.animationDelay = `${index * 0.1}s`

    methodCard.innerHTML = `
            <div class="mb-4">
                <i class="${method.icon} text-4xl text-amber-400 mb-3"></i>
                <h3 class="text-xl font-semibold text-amber-300">${method.name}</h3>
            </div>
            <div class="space-y-2 mb-4">
                <div class="flex items-center justify-center gap-2 text-stone-300">
                    <i class="fas fa-clock text-sm"></i>
                    <span>${method.time}</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-stone-300">
                    <i class="fas fa-thermometer-half text-sm"></i>
                    <span>${method.temp}</span>
                </div>
            </div>
            <p class="text-stone-400 text-sm leading-relaxed">${method.description}</p>
        `

    extractionGrid.appendChild(methodCard)
  })
}

// Crear partículas de granos de café
function createCoffeeBeans() {
  const container = document.getElementById("coffeeBeansContainer")

  function createBean() {
    const bean = document.createElement("div")
    bean.className = "bean"
    bean.style.left = Math.random() * 100 + "%"
    bean.style.animationDuration = Math.random() * 3 + 5 + "s"
    bean.style.animationDelay = Math.random() * 2 + "s"

    container.appendChild(bean)

    // Remover el grano después de la animación
    setTimeout(() => {
      if (bean.parentNode) {
        bean.parentNode.removeChild(bean)
      }
    }, 8000)
  }

  // Crear granos periódicamente
  setInterval(createBean, 2000)
}

// Actualizar hora actual
function updateTime() {
  const now = new Date()
  const timeString = now.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  const timeElement = document.getElementById("currentTime")
  if (timeElement) {
    timeElement.textContent = `Abierto hasta 11:00 PM - ${timeString}`
  }
}

// Scroll suave a sección
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Animaciones al hacer scroll
function animateOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observar elementos que deben animarse
  document.querySelectorAll(".card-hover").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Modal de reservación
function openReservationModal() {
  const modal = document.getElementById("reservationModal")
  modal.classList.remove("hidden")
  modal.classList.add("flex")
  document.body.style.overflow = "hidden"

  // Animación de entrada
  setTimeout(() => {
    modal.querySelector("div").style.transform = "scale(1)"
    modal.querySelector("div").style.opacity = "1"
  }, 10)
}

function closeReservationModal() {
  const modal = document.getElementById("reservationModal")
  modal.classList.add("hidden")
  modal.classList.remove("flex")
  document.body.style.overflow = "auto"

  // Limpiar formulario
  document.getElementById("reservationForm").reset()
}

// Manejar envío de reservación
document.getElementById("reservationForm").addEventListener("submit", (e) => {
  e.preventDefault()

  // Simular envío
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Procesando...'
  submitBtn.disabled = true

  setTimeout(() => {
    alert("¡Reservación confirmada! Te contactaremos pronto.")
    closeReservationModal()

    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Agregar al pedido (función placeholder)
function addToOrder(itemName) {
  // Efecto visual
  const button = event.target
  const originalText = button.innerHTML

  button.innerHTML = '<i class="fas fa-check mr-1"></i>Agregado'
  button.classList.add("bg-green-600")
  button.classList.remove("bg-amber-600")

  setTimeout(() => {
    button.innerHTML = originalText
    button.classList.remove("bg-green-600")
    button.classList.add("bg-amber-600")
  }, 1500)

  console.log(`Agregado al pedido: ${itemName}`)
}

// Cerrar modal al hacer clic fuera
document.getElementById("reservationModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeReservationModal()
  }
})

// Efectos de parallax suave
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

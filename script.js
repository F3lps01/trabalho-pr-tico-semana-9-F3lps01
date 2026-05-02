const data = {
  produtos: [
    {
      id: 1,
      nome: "Iphone 14",
      preco: 5000,
      categoria: "Celulares",
      imagem: "https://via.placeholder.com/150",
      descricao: "Celular Top de Linha da Apple",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Notebook Dell Inspiron",
      preco: 3500,
      categoria: "Notebooks",
      imagem: "https://via.placeholder.com/150",
      descricao: "Notebook para uso diário e trabalho",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Smart TV Samsung 55\"",
      preco: 4000,
      categoria: "Televisores",
      imagem: "https://via.placeholder.com/150",
      descricao: "Smart TV com resolução 4K",
      emEstoque: false
    },
    {
      id: 4,
      nome: "Headset Gamer Havit",
      preco: 200,
      categoria: "Acessórios",
      imagem: "https://via.placeholder.com/150",
      descricao: "Headset com som surround",
      emEstoque: true
    },
    {
      id: 5,
      nome: "Galaxy Watch 7",
      preco: 1200,
      categoria: "Smartwatches",
      imagem: "https://via.placeholder.com/150",
      descricao: "Smartwatch com monitoramento de saúde",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Galaxy Buds Live",
      preco: 400,
      categoria: "Acessórios",
      imagem: "https://via.placeholder.com/150",
      descricao: "Fones com cancelamento de ruído",
      emEstoque: false
    },
    {
      id: 7,
      nome: "PlayStation 5",
      preco: 2800,
      categoria: "Videogames",
      imagem: "https://via.placeholder.com/150",
      descricao: "Console de última geração",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Xbox Series X",
      preco: 3000,
      categoria: "Videogames",
      imagem: "https://via.placeholder.com/150",
      descricao: "Console poderoso",
      emEstoque: true
    }
  ]
}

// Seleção DOM
const productList = document.getElementById("product-list")
const productDetails = document.getElementById("product-details")

const searchInput = document.querySelector("#search")
const categorySelect = document.querySelector("#category")
const btnRender = document.querySelector("#btnRender")

// Função preço
function formatPrice(preco) {
  return "R$ " + preco.toFixed(2)
}

// Criar card
function createProductCard(produto) {
  const card = document.createElement("div")
  card.classList.add("card")
  card.setAttribute("data-id", produto.id)

  card.style.border = "1px solid #ccc"
  card.style.padding = "10px"
  card.style.margin = "10px"

  const nome = document.createElement("h3")
  nome.innerText = produto.nome

  const img = document.createElement("img")
  img.src = produto.imagem
  img.style.width = "100%"

  const preco = document.createElement("p")
  preco.innerText = formatPrice(produto.preco)

  const categoria = document.createElement("p")
  categoria.innerText = produto.categoria

  const btnDetalhes = document.createElement("button")
  btnDetalhes.innerText = "Ver detalhes"
  btnDetalhes.addEventListener("click", () => {
    showProductDetails(produto)
  })

  const btnHighlight = document.createElement("button")
  btnHighlight.innerText = "Destacar"
  btnHighlight.addEventListener("click", () => {
    card.classList.toggle("highlight")
  })

  card.appendChild(nome)
  card.appendChild(img)
  card.appendChild(preco)
  card.appendChild(categoria)
  card.appendChild(btnDetalhes)
  card.appendChild(btnHighlight)

  return card
}

// Renderizar produtos
function renderProducts(produtos) {
  productList.innerHTML = ""

  produtos.forEach(produto => {
    const card = createProductCard(produto)
    productList.appendChild(card)
  })

  const cards = document.querySelectorAll(".card")
  cards.forEach(card => {
    console.log(card.getAttribute("data-id"))
  })
}

// Renderizar categorias
function renderCategories() {
  const categorias = new Set()

  data.produtos.forEach(p => categorias.add(p.categoria))

  categorias.forEach(cat => {
    const option = document.createElement("option")
    option.value = cat
    option.innerText = cat
    categorySelect.appendChild(option)
  })
}

// Filtro
function filterProducts() {
  const texto = searchInput.value.toLowerCase()
  const categoria = categorySelect.value

  return data.produtos.filter(produto => {
    const matchNome = produto.nome.toLowerCase().includes(texto)
    const matchCategoria =
      categoria === "Todas" || produto.categoria === categoria

    return matchNome && matchCategoria
  })
}

// Detalhes
function showProductDetails(produto) {
  productDetails.innerHTML = `
    <h2>${produto.nome}</h2>
    <p>${formatPrice(produto.preco)}</p>
    <p>${produto.categoria}</p>
    <p>${produto.descricao}</p>
    <p>${produto.emEstoque ? "Em estoque" : "Sem estoque"}</p>
  `
}

// Eventos
searchInput.addEventListener("input", () => {
  renderProducts(filterProducts())
})

categorySelect.addEventListener("change", () => {
  renderProducts(filterProducts())
})

btnRender.addEventListener("click", () => {
  renderProducts(filterProducts())
})

// Inicialização
renderCategories()
renderProducts(data.produtos)
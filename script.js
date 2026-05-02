const data = {
  produtos: [
    {
      id: 1,
      nome: "Iphone 14",
      preco: 5000,
      categoria: "Celulares",
      imagem: "https://imgs.search.brave.com/Z3EqiCC7oDSZH2BAy2A8WV2joAu4twyOoV_S2vVlWDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8yMi9hcHBs/ZS1pcGhvbmUtMTQv/bGlmZXN0eWxlLy0x/MDI0dzIvZ3NtYXJl/bmFfMDE4LmpwZw",
      descricao: "Celular Top de Linha da Apple",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Notebook Dell",
      preco: 3500,
      categoria: "Notebooks",
      imagem: "https://imgs.search.brave.com/DViN439ya-xKuvZDih53WIeCy-BoGdLyPZ6muKW-LtM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnpz/dC5jb20uYnIvdGh1/bWJzLzUxLzFjL2Uv/LTE2OTM3MjcxODgu/anBn",
      descricao: "Notebook para trabalho",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Smart TV",
      preco: 4000,
      categoria: "Televisores",
      imagem: "https://imgs.search.brave.com/53HLkVMrnbd13uQpyIcPVHdBB-WTlbDeCXTo28O_p0c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hLXN0/YXRpYy5tbGNkbi5j/b20uYnIvMjgweDIx/MC9zbWFydC10di01/NS1zYW1zdW5nLXVs/dHJhLTRrLW5lby1x/bGVkLXVsdHJhLXFu/ODVmLXFuNTVxbjg1/ZmFneHpkLTEyMGh6/LXRpemVuLW5xNC1h/aS1nZW4yLWJpeGJ5/LWFsZXhhLTQtaGRt/aS9tYWdhemluZWx1/aXphLzI0MDQ0NDkw/MC85OTNmMzM0MWMx/NTUzYjM2MjVmMjVj/YjYxMDAzOTBjYi5q/cGc",
      descricao: "TV 4K",
      emEstoque: false
    },
    {
      id: 4,
      nome: "Headset Gamer",
      preco: 200,
      categoria: "Acessórios",
      imagem: "https://imgs.search.brave.com/vkxzyI4UpSij7--RUXEepr4dmrUThG1aqWWfEuA6Zn0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hLXN0/YXRpYy5tbGNkbi5j/b20uYnIvMjgweDIx/MC9oZWFkc2V0LWdh/bWVyLXNlbS1maW8t/aGF2aXQtZnV4aS1o/My13aXJlbGVzcy1i/bHVldG9vdGgtZS0y/LTRnaHotc29tLTct/MS1wcmV0by1lLWJy/YW5jby1mdXhpLWgz/LWJsYWNrLXdoaXRl/L2thYnVtLzUxOTkz/Ni8zMTFlNWFhMTEy/ZDEzN2Q1ODY0Y2I4/OGMwYjk3NGE3Mi5q/cGVn",
      descricao: "Headset gamer",
      emEstoque: true
    },
    {
      id: 5,
      nome: "Galaxy Watch",
      preco: 1200,
      categoria: "Smartwatches",
      imagem: "https://imgs.search.brave.com/TMMuwhVD63c5scI9IstcixqzNb8ow7pXEfRPJ7Ltzgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hLXN0/YXRpYy5tbGNkbi5j/b20uYnIvMjgweDIx/MC9zYW1zdW5nLWdh/bGF4eS13YXRjaDct/c21hcnR3YXRjaC00/NG1tLWx0ZS1nYWxh/eHktYWktdGVsYS1l/bS1jcmlzdGFsLWRl/LXNhZmlyYS9zYW1z/dW5nLzY0NzUvYmRl/ZTYyYjYxNmI1MDY3/NzUyZWJiZTNlZWJl/OGMyZjYuanBlZw",
      descricao: "Relógio inteligente",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Galaxy Buds",
      preco: 400,
      categoria: "Acessórios",
      imagem: "https://imgs.search.brave.com/GSWpJ0oDfXZ5ASRKikRW74Zx3wE3z3aHNjvvA1Zcnp0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LmNhc2FzYmFoaWEu/Y29tLmJyLzE1NzY2/NDc0ODQvMXhnLmpw/Zw",
      descricao: "Fones sem fio",
      emEstoque: false
    },
    {
      id: 7,
      nome: "PlayStation 5",
      preco: 2800,
      categoria: "Videogames",
      imagem: "https://imgs.search.brave.com/Dxwgy0eNKGVkiLM2sh1eaGSYYNyK1mKwVKkLI47flLg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/NzE4NjQtTUxBOTE5/MjUxNjAwMjNfMDky/MDI1LU8ud2VicA",
      descricao: "Console moderno",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Xbox Series X",
      preco: 3000,
      categoria: "Videogames",
      imagem: "https://imgs.search.brave.com/FkQXSlwvYy-X0eRmyjCONe8su7-0WtrD1f9ifJsfAcw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzVk/ZjNhMTg0ZmQ5ZGIy/MjJkMDAyNjk1ND93/aWR0aD03MDA",
      descricao: "Console poderoso",
      emEstoque: true
    }
  ]
}

// ================= DOM =================
const productList = document.getElementById("product-list")
const productDetails = document.getElementById("product-details")

const searchInput = document.querySelector("#search")
const categorySelect = document.querySelector("#category")
const btnRender = document.querySelector("#btnRender")

// ================= FUNÇÕES =================

function formatPrice(preco) {
  return "R$ " + preco.toFixed(2)
}

function createProductCard(produto) {
  const card = document.createElement("div")
  card.classList.add("card")

  card.setAttribute("data-id", produto.id)

  card.style.border = "1px solid #ccc"
  card.style.padding = "10px"
  card.style.margin = "10px"
  card.style.width = "220px"
  card.style.display = "inline-block"
  card.style.verticalAlign = "top"
  card.style.borderRadius = "8px"

  const nome = document.createElement("h3")
  nome.innerText = produto.nome

  const img = document.createElement("img")
  img.src = produto.imagem
  img.style.width = "100%"        
  img.style.height = "150px"      
  img.style.objectFit = "cover"
  img.style.borderRadius = "8px"

  const preco = document.createElement("p")
  preco.innerText = formatPrice(produto.preco)

  const categoria = document.createElement("p")
  categoria.innerText = produto.categoria

  
  const btnDetalhes = document.createElement("button")
  btnDetalhes.innerText = "Ver detalhes"
  btnDetalhes.onclick = function () {   
    showProductDetails(produto)
  }

  
  const btnHighlight = document.createElement("button")
  btnHighlight.innerText = "Destacar"
  btnHighlight.onclick = function () {
    card.classList.toggle("highlight")
  }

  card.appendChild(nome)
  card.appendChild(img)
  card.appendChild(preco)
  card.appendChild(categoria)
  card.appendChild(btnDetalhes)
  card.appendChild(btnHighlight)

  return card
}


function renderProducts(produtos) {
  productList.innerHTML = ""

  produtos.forEach(produto => {
    const card = createProductCard(produto)
    productList.appendChild(card)
  })

  
  const cards = document.querySelectorAll(".card")
  cards.forEach(card => {
    console.log("ID:", card.getAttribute("data-id"))
  })
}


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


function showProductDetails(produto) {
  productDetails.innerHTML = `
    <h2>${produto.nome}</h2>
    <img src="${produto.imagem}" style="width:200px; border-radius:8px;">
    <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
    <p><strong>Categoria:</strong> ${produto.categoria}</p>
    <p><strong>Descrição:</strong> ${produto.descricao}</p>
    <p><strong>Status:</strong> ${produto.emEstoque ? "Em estoque" : "Sem estoque"}</p>
  `
}

// ================= EVENTOS =================
searchInput.addEventListener("input", () => {
  renderProducts(filterProducts())
})

categorySelect.addEventListener("change", () => {
  renderProducts(filterProducts())
})

btnRender.addEventListener("click", () => {
  renderProducts(filterProducts())
})

// ================= INICIALIZAÇÃO =================
renderCategories()
renderProducts(data.produtos)
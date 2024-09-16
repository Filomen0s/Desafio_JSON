function cadastrarCarro(){
    let carroMarca = document.getElementById("marca").value
    let carroTipo = document.getElementById("tipo").value
    let carroPreco = document.getElementById("preco").value

    const obj = {
        marca: carroMarca,
        tipo: carroTipo,
        preco: carroPreco
    }

    localStorage.setItem("carros", JSON.stringify(obj))

    alert("O seu carro é da marca: " + obj.marca + "\nDo modelo: " + obj.tipo + "\nE custa: R$ " + obj.preco)
}
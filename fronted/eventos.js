function excluirCat(categoriaId) {
    
    if (false == confirm('Tem certeza?')) {
        return;
    }
    
    tableData.innerHTML = `
        <div>
            <span class="visually-hidden">Loading...</span>
        </div>
    `;
    
    fetch(`http://localhost:8000/categories/${categoriaId}`, {
        method: 'DELETE',
    });

    //vai esperar 02 segundos, e vai atualizar a Tabela do HTML
    setTimeout(() => atualizarTabela(), 2000);
}

function atualizarTabela() {
    fetch('http://localhost:8000/categories', {
        headers: {
            senha: '123bolinha'
        }
    })
        .then(res => res.json())
        .then(categorias => {
            categorias.map(cada => {
                tableData.innerHTML = "";
                
                tableData.innerHTML += `
                    <tr>
                        <td>${cada.name}</td>
                        <td>${cada.image}</td>
                        <td>${cada.description}</td>
                        <td>
                            <button onclick="excluirCat('${cada.id}')" class="btn btn-dark">Excluir</button>
                        </td>
                    </tr>
                `;
            });
        })
}

atualizarTabela();
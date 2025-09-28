const API_URL = "http://localhost:3000/items"

const openCreateBtn = document.getElementById('openCreateBtn')
const formCard = document.getElementById('formCard')
const ItemCard = document.getElementById('itemCard')
const cancelBtn = document.getElementById('cancelBtn')
const ListCard = document.getElementById('listCard')
const itemsTableBody = document.getElementById('itemsTableBody')
let items = []

// GET Action
async function fetchItems() {
    try {
        const res = await fetch(API_URL);
        console.log("Result", res)
        if (!res.ok) throw new Error('Failed to fetch the items')
            items = await res.json()
        // render the items
        renderItems(items)
        console.log(items)
    } catch (error) {
        showToast(error.message, 'error')
    }
}

function showToast(message, type = 'info') {

}
function renderItems(list) {
    itemsTableBody.innerHTML = '';
    if (list.length === 0) {
        itemsTableBody.innerHTML = `<tr>
            <td colspan="2" class="p-2 text-center text-gray-500">No Items found</td>
        </tr>`
        return;
    }

    list.forEach(item => {
        const tr = document.createElement('tr')
        tr.className = 'border-b' 
        tr.innerHTML = `
        <td class="p-2 align top font-medium">${item.title}</td>
        <td class="p-2 align top">${item.description}</td>
        <td class="p-2 align top">
            <button class="mr-2 px-2 py-1 bg-yellow-400 rounded">Edit</button>
            <button class="mr-2 px-2 py-1 bg-red-500 rounded">Delete</button>
        </td>
        `
        itemsTableBody.appendChild(tr)
    })
}

fetchItems()
Vue.component('pricelist',
{
    props : ["id", "prices"],
    template : `<div :class="'animated fadeInRight component priceList ' + id">
                    <table>
                        <thead>
                            <tr>
                                <th>Forfaits</th>
                                <th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Forfait1Exemple</td>
                                <td>PrixForfait1</td>
                            </tr>
                            <tr v-for="pr in prices">
                                <td>{{ pr.name }}</td>
                                <td>{{ pr.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
});
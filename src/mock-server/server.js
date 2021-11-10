import { createServer, Model } from "miragejs";
import getDeals from "./mock/get-deals.json";

function server() {
    createServer({
        models: {
            deal: Model,
        },
        seeds(server) {
            getDeals.forEach(deal => server.create("deal", deal));
        },
        routes() {
            this.get("/api/deals", (schema, request) => {
                let { queryParams: { page, perPage } } = request;
                if(!perPage)  perPage = 10;
                return {
                    page: page,
                    count: schema.deals.all().length,
                    pages: Math.ceil(schema.deals.all().length/perPage),
                    deals: schema.deals.all().sort((a, b) => b.id-a.id).slice(perPage*page-perPage, perPage+perPage*page ).models
                };
            });
            this.get('/api/info/:id', (schema, request) => {
                const { id } = request.params;
                return schema.deals.findBy({id: id}).attrs;
            })

        }
    });
}

export default server;
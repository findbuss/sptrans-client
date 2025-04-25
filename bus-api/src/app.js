const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Inicie a configuração do GTFS antes de definir as rotas!
startGtfsConfig;

console.log("Dados GTFS carregados com sucesso!");

// Rotas
app.use("/api/agencies", agenciesRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/fare-attributes", fareAttributesRoutes);
app.use("/api/fare-rules", fareRulesRoutes);
app.use("/api/trips", tripsRoutes);
app.use("/api/routes", routesRoutes);
app.use("/api/shapes", shapesRoutes);
app.use("/api/stops", stopsRoutes);
app.use("/api/stop-times", stopTimesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

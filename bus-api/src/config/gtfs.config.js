import { importGtfs } from "gtfs";

const config = {
  agencies: [
    {
      url: "https://www.sptrans.com.br/umbraco/Surface/PerfilDesenvolvedor/BaixarGTFS?memberName=sptrans",
    },
  ],
};

export default await importGtfs(config);

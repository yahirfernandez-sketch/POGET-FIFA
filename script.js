<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Simulador EA FC</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Controles de Accesibilidad y Tema -->
  <button id="btnAumentarFonte">A+</button>
  <button id="btnDiminuirFonte">A-</button>
  <button id="btnTema">🌙 Modo oscuro</button>

  <!-- Controles de Música (Agregados) -->
  <audio id="musicaFundo" src="tu-musica.mp3" loop></audio>
  <button id="btnPlayMusica">🎵 Reproducir Música</button>
  <input type="range" id="volumenMusica" min="0" max="1" step="0.1" value="0.5">

  <header>
    <h1>EA SPORTS FC / FIFA UT</h1>
    <h2>SIMULADOR DE MONTAGEM DE ELENCO</h2>
    <p>Monte seu time dos sonhos, otimize a química e domine o Champions!</p>
  </header>

  <main>
    <section>
      <h3>Erros Comuns no Ultimate Team</h3>
      <ul>
        <li><strong>Química Baixa:</strong> Cartas fora de posição perdem até 30% dos atributos.</li>
        <li><strong>Gasto com Pacotes:</strong> Comprar packs com FC Points sem estratégia de mercado.</li>
        <li><strong>Táticas Desbalanceadas:</strong> Deixar a defesa muito exposta em contra-ataques.</li>
      </ul>
    </section>

    <section>
      <h3>Boas Práticas de Pro Player</h3>
      <ul>
        <li><strong>Links Verdes:</strong> Combine jogadores do mesmo clube, liga ou nacionalidade.</li>
        <li><strong>Trade Consciente:</strong> Compre cartas em dias de recompensa e venda no pico de Hype.</li>
        <li><strong>Estilos de Química:</strong> Aplique estilos (Sombra/Caçador) para maximizar atributos chave.</li>
      </ul>
    </section>

    <section>
      <h3>🎮 Simulador de Química Total do Time</h3>
      <label for="qtdMesmaLiga">Jogadores da mesma liga no time titular:</label>
      <input type="number" id="qtdMesmaLiga" min="0" max="11">
      <button id="btnCalcular">CALCULAR QUÍMICA</button>

      <div id="resultado" class="hidden">
        <p id="textoResultado"></p>
      </div>
    </section>

    <section>
      <h3>Comparativo de Cartas no Meta Atual</h3>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Atributo Prioritário</th>
            <th>Estilo de Química Recomendado</th>
            <th>Média de Preço (Moedas)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atacante (ATA)</td>
            <td>Ritmo (PAC) e Chute (SHO)</td>
            <td>Caçador (Hunter)</td>
            <td>15.000 - 500.000+</td>
          </tr>
          <tr>
            <td>Meio-Campo (MC/VOL)</td>
            <td>Passe (PAS) e Condução (DRI)</td>
            <td>Motor (Engine) / Sombra (Shadow)</td>
            <td>10.000 - 300.000</td>
          </tr>
          <tr>
            <td>Zagueiro (ZAG)</td>
            <td>Defesa (DEF) e Físico (PHY)</td>
            <td>Sombra (Shadow) / Âncora (Anchor)</td>
            <td>5.000 - 200.000</td>
          </tr>
        </tbody>
      </table>
    </section>

    <aside>
      <h3>Quer evoluir no cenário de Esports no Paraná?</h3>
      <p>A Secretaria de Estado da Educação do Paraná (SEED-PR) oferece cursos de tecnologia que te ensinam a desenvolver seus próprios jogos e aplicações interativas gratuitamente!</p>
      <a href="#">SAIBA + SOBRE OS CURSOS DE TI DA SEED-PR</a>
    </aside>
  </main>

  <!-- Vincula el archivo JS SOLO UNA VEZ al final del body -->
  <script src="script.js"></script>
</body>
</html>
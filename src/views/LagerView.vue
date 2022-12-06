<template>
  <v-sheet class="d-flex flex-row justify-center"><h1>Lager</h1></v-sheet>

  <v-sheet class="d-flex justify-center">
    <v-sheet class="d-flex flex-row">
      <v-sheet class="ma-2 pa-2"
        ><v-sheet class="d-flex flex-column"
          ><v-btn className="btn-default red">ON</v-btn
          ><v-btn className="btn-default green">1</v-btn
          ><v-btn className="btn-default">2</v-btn></v-sheet
        >
        <v-card className="sliderbox" :elevation="0"
          ><v-slider
            step="1"
            density="comfortable"
            thumb-label
            color="orange"
            label="Utleverans"
            direction="vertical" /></v-card
      ></v-sheet>
      <v-sheet class="ma-2 pa-2"
        ><v-sheet class="d-flex flex-column"
          ><v-btn className="btn-default red">ON</v-btn
          ><v-btn className="btn-default green">1</v-btn
          ><v-btn className="btn-default">2</v-btn></v-sheet
        >
        <v-card className="sliderbox" :elevation="0"
          ><v-slider
            step="1"
            density="comfortable"
            thumb-label
            color="orange"
            label="Retur"
            direction="vertical" /></v-card
      ></v-sheet>
      <v-sheet class="ma-2 pa-2"
        ><v-sheet class="d-flex flex-column"
          ><v-btn className="btn-default red">ON</v-btn
          ><v-btn className="btn-default green">1</v-btn
          ><v-btn className="btn-default">2</v-btn></v-sheet
        >
        <v-card className="sliderbox" :elevation="0"
          ><v-slider
            step="1"
            density="comfortable"
            thumb-label
            color="orange"
            label="Pack"
            direction="vertical" /></v-card
      ></v-sheet>
      <v-sheet class="ma-2 pa-2"
        ><v-sheet class="d-flex flex-column"
          ><v-btn className="btn-default red">ON</v-btn
          ><v-btn className="btn-default green">1</v-btn
          ><v-btn className="btn-default">2</v-btn></v-sheet
        >
        <v-card className="sliderbox" :elevation="0"
          ><v-slider
            step="1"
            density="comfortable"
            thumb-label
            color="orange"
            label="Inleverans"
            direction="vertical" /></v-card
      ></v-sheet>
      <v-sheet class="ma-2 pa-2"
        ><v-sheet class="d-flex flex-column"
          ><v-btn className="btn-default red">ON</v-btn
          ><v-btn className="btn-default green">1</v-btn
          ><v-btn className="btn-default">2</v-btn></v-sheet
        >
        <v-card className="sliderbox" :elevation="0"
          ><v-slider
            step="1"
            density="comfortable"
            thumb-label
            color="orange"
            label="Lager Nya"
            direction="vertical" /></v-card
      ></v-sheet>
      <v-sheet class="ma-2 pa-2"
        ><v-sheet class="d-flex flex-column"
          ><v-btn className="btn-default red">ON</v-btn
          ><v-btn className="btn-default green">1</v-btn
          ><v-btn className="btn-default">2</v-btn></v-sheet
        >
        <v-card className="sliderbox" :elevation="0"
          ><v-slider
            step="1"
            density="comfortable"
            thumb-label
            color="orange"
            label="Lager Kontor"
            direction="vertical" /></v-card
      ></v-sheet>
    </v-sheet>
    <v-sheet class="d-flex flex-column">
      <v-sheet class="d-flex justify-center"
        ><h1>Mute player 1 & 2</h1></v-sheet
      >
      <v-sheet class="d-flex justify-center"
        ><v-btn className="btn-default green">1</v-btn
        ><v-btn className="btn-default red">2</v-btn></v-sheet
      >
    </v-sheet>
  </v-sheet>
</template>

<script></script>

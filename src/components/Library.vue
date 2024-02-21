<template>
    <div id = 'library'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">With props</div>

                                <v-card
                                width="400"
                                title="Library Hours"
                                subtitle="This is a subtitle"
                                text="Main Library
08:00 - 21:00 (Monday-Friday)

09:00 - 18:00 (Saturday)

Closed (Sunday / Public Holidays)

A&K Law Library
09:00 - 19:00 (Monday-Friday)

Closed (Weekend / Public Holidays)

James Gachui Library
As per SBS Building Hours"
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    Library Collections
                                </template>

                                <template v-slot:subtitle>
                                    This is a subtitle
                                </template>

                                <template v-slot:text>
                                    Explore our extensive collection of print and electronic resources, including:

Books: Browse thousands of print books covering various disciplines and topics.
Journals and Periodicals: Access a wide range of scholarly journals, magazines, and newspapers both in print and electronically.
Databases: Utilize our online databases to find scholarly articles, research papers, and other academic resources.
Special Collections: Discover unique materials, rare books, archives, and manuscripts that provide valuable insights into specialized subjects and historical periods.
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>Library Policies</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Familiarize yourself with our library policies to ensure a positive and productive library experience:

Borrowing Policies: Learn about loan periods, renewal options, fines, and other borrowing regulations.
Access Policies: Review our access policies regarding library hours, guest access, and use of library facilities.
Code of Conduct: Respect our code of conduct, which outlines expectations for behavior and etiquette within the library.
                                </v-card-text>
                                </v-card>
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script setup>
  const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>
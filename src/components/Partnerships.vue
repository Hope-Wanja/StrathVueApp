<template>
    <div id = 'partnerships'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
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
                                title="Industry Partnerships"
                                subtitle="This is a subtitle"
                                text="We work closely with leading companies and organizations to ensure that our programs remain relevant and aligned with industry needs. These partnerships provide opportunities for internships, co-op placements, collaborative research projects, and guest lectures, giving our students valuable real-world experience and enhancing their employability upon graduation."
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                   International Partnerships
                                </template>

                                <template v-slot:subtitle>
                                    This is a subtitle
                                </template>

                                <template v-slot:text>
                                    Strathmore University maintains strategic partnerships with universities and institutions around the world to foster cross-cultural exchange, research collaboration, and global learning opportunities. Through study abroad programs, joint degree programs, and international research projects, we provide our students with the opportunity to gain a global perspective and develop intercultural competence.
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>How to Partner with Us</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    We welcome inquiries from organizations interested in exploring partnership opportunities with Strathmore University. Whether you are interested in collaborating on research projects, sponsoring student activities, or exploring educational partnerships, we are eager to discuss how we can work together to achieve mutual goals. To learn more about partnership opportunities, please contact [Partnership Contact Name] at [Partnership Contact Email Address].
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
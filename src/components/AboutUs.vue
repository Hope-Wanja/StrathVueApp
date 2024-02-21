<template>
    <div id = 'aboutus'>
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
                                title="History"
                                subtitle="This is a subtitle"
                                text="Strathmore College was started in 1961 as an Advanced-level Sixth Form College offering Science and Arts subjects by a group of professionals, who formed a charitable Educational Trust (now the Strathmore Educational Trust). Strathmore College was the first in Pre-independence Kenya to accommodate all races, religions, and social standing. Saint Josemaría Escrivá, the founder of Opus Dei, inspired and encouraged them to start the College.

In March 1966, the first intake of Accountancy students, twenty-five in number, joined the Sixth Form students and began preparing for the examinations of the UK-based Association of Chartered Certified Accountants (ACCA). These first Accountancy students were sponsored by Shell East Africa, BAT (East Africa), and the East African Breweries. At this time Strathmore College was unique as a fully integrated post-Form 4 institution offering both academic and professional courses.

In October 1982, owing to the increased demand from companies for the professional training of their employees, the College began evening courses in Accountancy after normal working hours, with 60 students sponsored by various companies.

In 1986, in response to a request by the Trustees, the Government of Kenya donated 5 acres of land on Ole Sangale Road, Madaraka Estate. The European Union (EU) and the Italian Government agreed to back the Madaraka Campus project. The donors were keen to support a co-educational College that would offer courses in Management and Accountancy. Kianda College, an undertaking of Kianda Foundation, which was planning new developments at the time, agreed to run their professional courses in the new Madaraka campus.

Construction of the new campus commenced in September 1989. Meanwhile, in January 1991, the Information Technology Centre was started in the Lavington Campus to run computer courses leading to the Institute for the Management of Information Systems (formerly Institute of Data Processing Management) Diploma and Higher Diploma. In January 1992 a Distance Learning Centre was opened to offer correspondence courses in Accountancy to students who are unable to attend lectures.

In January 1993 Strathmore College merged with Kianda College and moved to Ole Sangale Road, Madaraka Estate."
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    Enrollment
                                </template>

                                <template v-slot:subtitle>
                                    This is a subtitle
                                </template>

                                <template v-slot:text>
                                    A total population of 4,393 students(full-time and part-time) studying Accountancy, Administration, Commerce, Finance, Management, and Information Technology.
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>Becoming Strathmore University</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    In August 2002 the Commission of Higher Education awarded Strathmore a Letter of Interim Authority to operate as a University with a Faculty of Commerce and a Faculty of Information Technology.

The first undergraduate students to enroll in these faculties completed their 4-year degree course in December 2004 and graduated in August 2005.

In June 2007, Kenya’s Commission for Higher Education approved the award of a charter to Strathmore University.
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
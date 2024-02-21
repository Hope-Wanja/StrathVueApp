<template>
    <div id = 'homepage'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://images.unsplash.com/photo-1610159661596-8e777a72f6af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://media.istockphoto.com/id/1764803974/photo/multiracial-young-activist-protesters-writing-on-signs-before-a-protest-on-the-street-taking.jpg?s=1024x1024&w=is&k=20&c=mIe1PolIakjfLOiYefHaThsg0AnerqXYl1nVXNS7rn0="
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
                                title="Student Life"
                                subtitle="This is a subtitle"
                                text="University student life encompasses a diverse range of experiences, from academic pursuits to social activities and personal growth. Students typically balance their studies with extracurricular involvement, forming friendships, exploring new interests, and navigating newfound independence. The university environment offers opportunities for intellectual stimulation through classes, research projects, and discussions with peers and professors. Beyond academics, students engage in campus events, clubs, and sports, fostering a sense of community and belonging. Challenges like time management, financial constraints, and academic pressure are common, but they're often balanced with support systems, resources, and opportunities for personal development. Overall, university student life is a dynamic blend of learning, exploration, and self-discovery."
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    Accomodation
                                </template>

                                <template v-slot:subtitle>
                                    This is a subtitle
                                </template>

                                <template v-slot:text>
                                    University accommodation provides students with a convenient and supportive living environment during their academic journey. These residences typically offer various options, including dormitories, apartments, and shared houses, catering to different preferences and budgets. Living on campus fosters a sense of community, facilitating interactions with peers and involvement in campus activities. It also offers proximity to academic buildings, libraries, and other campus facilities, enhancing accessibility and convenience. University accommodation often provides amenities such as furnished living spaces, communal areas, laundry facilities, and internet access, easing the transition to independent living. Additionally, on-site staff and support services are available to assist students with any concerns or needs they may have. Overall, university accommodation offers a safe, inclusive, and vibrant living experience that complements the academic journey and contributes to personal growth and development.





                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>Sports</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    University sports programs offer students opportunities for physical activity, teamwork, and personal development. These programs encompass a wide range of sports, from traditional ones like basketball, soccer, and volleyball to niche activities such as fencing, lacrosse, and rowing. Participating in university sports allows students to maintain a healthy lifestyle, develop athletic skills, and build camaraderie with teammates. It also fosters qualities like discipline, leadership, and resilience through training, competition, and teamwork. University sports teams often compete at various levels, from intramural leagues within the university to intercollegiate competitions against other schools, providing opportunities for athletes to showcase their talents and represent their institution. Additionally, university sports programs contribute to campus culture and school spirit, with students, faculty, and alumni rallying behind their teams and attending games and events. Overall, university sports play a vital role in the holistic development of students, promoting physical well-being, personal growth, and community engagement.





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
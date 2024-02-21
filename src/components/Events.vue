<template>
    <div id = 'events'>
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
                                title="Events Update"
                                subtitle="This is a subtitle"
                                text="Welcome to the Events section of [University Name]! Stay updated on all the exciting events happening on campus by browsing our calendar below. From academic lectures and workshops to cultural festivals and sports tournaments, there's always something happening at [University Name]. Join us and be part of the vibrant community experience!"
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    Upcoming Events

February 2024


                                </template>

                                <template v-slot:subtitle>
                                    This is a subtitle
                                </template>

                                <template v-slot:text>
                                    
Certainly! Here's an example of content for the "Events" section of a university website:

Events

Welcome to the Events section of [University Name]! Stay updated on all the exciting events happening on campus by browsing our calendar below. From academic lectures and workshops to cultural festivals and sports tournaments, there's always something happening at [University Name]. Join us and be part of the vibrant community experience!

Upcoming Events

February 2024

1. Career Fair

Date: February 10th, 2024
Time: 10:00 AM - 4:00 PM
Location: [Venue Name], [Address]
Description: Connect with top employers and explore internship and job opportunities across various industries. Open to all students and alumni. Bring copies of your resume and dress professionally!

2. Guest Lecture: "The Future of Artificial Intelligence"
Date: February 15th, 2024
Time: 3:00 PM - 5:00 PM
Location: [Lecture Hall Name], [Address]
Description: Join us for an insightful discussion on the latest advancements and ethical implications of artificial intelligence. Presented by Dr. [Speaker Name], renowned expert in the field. Open to students, faculty, and the public.

3. Spring Music Festival
Date: February 22nd - February 24th, 2024
Time: Various times
Location: [Outdoor Amphitheater], [Address]
Description: Enjoy three days of live music performances featuring local bands, student musicians, and special guest artists. Food trucks and vendor booths will be available. Admission is free for all!

                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>Ongoing Events</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
1. Fitness Classes
Days: Mondays, Wednesdays, Fridays
Time: 5:00 PM - 6:00 PM
Location: [Campus Fitness Center], [Address]
Description: Stay active and healthy by joining our fitness classes, including yoga, Zumba, and cardio workouts. Open to students, faculty, and staff. No registration required.
2. Study Groups
Days: Mondays - Thursdays
Time: 7:00 PM - 9:00 PM
Location: [Library Study Rooms], [Address]
Description: Enhance your academic success by participating in study groups facilitated by peer tutors. Bring your study materials and collaborate with fellow students in a supportive environment.
3. Past Events Archive
Missed an event? Check out our Past Events Archive to see photos, videos, and recaps of previous events hosted by [University Name].

Submit an Event

Have an event you'd like to promote on our website? Submit your event details through our online form, and our events team will review your submission for inclusion on our calendar.

Join us for upcoming events and make the most of your [University Name] experience!


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
<template>
    <div id = 'courses'>
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

                                <v-card width="400">
                                    <template v-slot:title>{{ componentTitle }} </template>

                                        <template v-slot:text>
                                          <v-list
                                        :items=courses
                                        item-title=coursename
                                        item-value=id
                                        ></v-list>
                                        ></template>
                                ></v-card>
                            </div>     
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>

<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      courses: [
       {
        id: 1,
        coursename:'Financial Economics'
       },
       {
        id: 2,
        coursename: 'Phsycology'
       },
       {
        id: 3,
        coursename: 'Computer Science'
       },
       {
        id: 4,
        coursename: 'Financial Engineering'
       },
       {
        id: 5,
        coursename: 'Medicine and Surgery'
       },
       {
        id: 6,
        coursename: 'Education'
       },
       {
        id: 7,
        coursename: 'Architecture'
       },
       {
        id: 8,
        coursename: 'Forestry'
       },
       {
        id: 9,
        coursename: 'Law'
       },
       {
        id: 10,
        coursename: 'Hospitality and Tourism'
       }
      ],
      componentTitle: 'Courses Offered at Strath Uni'
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>



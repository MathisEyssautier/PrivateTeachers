Vue.component('whyus',
{
    props : ["id", "about"],
    template : `<div :class="'animated fadeInRight component why-us ' + id">
                    <h3 v-for="h in about">{{ h.h3 }}
                        <h5>{{ h.h5 }}</h5><hr class="hrhr">
                    </h3>

                    <h3>Lorem Ipsum
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula urna ante, a ullamcorper dui ornare nec. Curabitur lectus magna, rutrum nec laoreet a, faucibus et ex. Maecenas ac lorem non eros hendrerit vestibulum. Nunc luctus sed magna nec consectetur. Maecenas bibendum posuere arcu non mattis. Proin varius consequat nulla, et aliquet turpis tempor sed. Nullam ac velit eget justo aliquet finibus. Praesent in scelerisque dolor. Nullam dictum ut mi vel viverra.

                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pharetra odio a nibh feugiat, eget consequat libero feugiat. Proin finibus purus at leo tincidunt, in mattis nisi fringilla. Quisque sodales, est vel fermentum cursus, nisi massa consequat nisi, quis lobortis quam felis sed enim. Sed ac augue nec risus dictum vehicula non sit amet lorem. Etiam cursus dolor ut justo lacinia, vel sagittis felis eleifend. Donec ornare massa tristique, facilisis leo vestibulum, malesuada eros. Morbi vel elit pellentesque, ultrices ligula non, semper ex. Vivamus quis suscipit sem, at rhoncus leo.</h5>
                    </h3>

                </div>`       
});
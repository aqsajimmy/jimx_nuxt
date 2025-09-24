<script lang="ts" setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const contactInfo = [
  {
    icon: 'i-lucide-mail',
    label: 'Email',
    value: 'jimmy@jimx.dev',
    link: 'mailto:jimmy@jimx.dev'
  },
  {
    icon: 'i-lucide-phone',
    label: 'Phone',
    value: '+62 812-3456-7890',
    link: 'tel:+6281234567890'
  },
  {
    icon: 'i-lucide-map-pin',
    label: 'Location',
    value: 'Jakarta, Indonesia',
    link: null
  },
  {
    icon: 'i-lucide-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/jimmy-dev',
    link: 'https://linkedin.com/in/jimmy-dev'
  }
];

const submitForm = async () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  isSubmitted.value = true;
  isSubmitting.value = false;
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    isSubmitted.value = false;
  }, 3000);
};
</script>

<template>
  <UPage>
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Contact Me</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, want to collaborate, or just want to say hello, 
            feel free to reach out!
          </p>
          
          <div class="space-y-4">
            <div
              v-for="contact in contactInfo"
              :key="contact.label"
              class="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div class="flex-shrink-0">
                <Icon :name="contact.icon" class="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ contact.label }}</p>
                <a
                  v-if="contact.link"
                  :href="contact.link"
                  class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ contact.value }}
                </a>
                <p v-else class="text-gray-600 dark:text-gray-300">{{ contact.value }}</p>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div class="mt-8">
            <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">Follow Me</h3>
            <div class="flex gap-4">
              <a
                href="https://github.com/aqsajimmy"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Icon name="i-lucide-github" class="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://twitter.com/aqsa_jimmy"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Icon name="i-lucide-twitter" class="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/aqsajimmy"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="i-lucide-linkedin" class="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
          
          <div v-if="isSubmitted" class="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div class="flex items-center gap-2">
              <Icon name="i-lucide-check-circle" class="h-5 w-5 text-green-600 dark:text-green-400" />
              <p class="text-green-800 dark:text-green-200 font-medium">Message sent successfully!</p>
            </div>
            <p class="text-green-700 dark:text-green-300 text-sm mt-1">I'll get back to you as soon as possible.</p>
          </div>
          
          <form class="space-y-6" @submit.prevent="submitForm">
            <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
              <UFormGroup label="Name" required>
                <UInput
                  v-model="form.name"
                  placeholder="Your name"
                  required
                  :disabled="isSubmitting"
                />
              </UFormGroup>
              
              <UFormGroup label="Email" required>
                <UInput
                  v-model="form.email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  :disabled="isSubmitting"
                />
              </UFormGroup>
            </div>
            
            <UFormGroup label="Subject" required>
              <UInput
                v-model="form.subject"
                placeholder="What's this about?"
                required
                :disabled="isSubmitting"
              />
            </UFormGroup>
            
            <UFormGroup label="Message" required>
              <UTextarea
                v-model="form.message"
                placeholder="Tell me about your project or question..."
                rows="6"
                required
                :disabled="isSubmitting"
              />
            </UFormGroup>
            
            <UButton
              type="submit"
              size="lg"
              class="w-full"
              :loading="isSubmitting"
              :disabled="isSubmitting || isSubmitted"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </UButton>
          </form>
        </div>
      </div>
    </div>
  </UPage>
</template>

<style scoped></style>
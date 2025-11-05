'use client'

import { motion } from 'framer-motion' // Animation library
import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react' // Icons

export default function ResumePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            AWS Certified Solutions Architect with 4.5+ years of experience in backend development, cloud-native applications, and site reliability engineering.
          </p>
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </motion.div>

        {/* Resume Content */}
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Experience</h2>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">Developer</h3>
                    <p className="text-primary-600 dark:text-primary-400">Tata Consultancy Services</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Oct 2022 - Present
                  </span>
                </div>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Led development of data migration pipelines using Attunity for seamless data transfer between on-premises systems and AWS cloud storage</li>
                  <li>Developed and maintained scalable ETL pipelines using AWS Glue and Lambda for transforming on-premise data to Redshift via S3</li>
                  <li>Wrote custom PySpark jobs on Glue for cleaning and transforming semi-structured data (JSON, CSV)</li>
                  <li>Automated pipeline triggers and error notifications with Step Functions and SNS, cutting manual intervention</li>
                  <li>Participated in agile sprints and collaborated with teams to enhance pipeline performance</li>
                </ul>
              </div>

              <div className="card">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">System Engineer</h3>
                    <p className="text-primary-600 dark:text-primary-400">Tata Consultancy Services</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Apr 2021 - Oct 2022</span>
                </div>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Built event-driven workflows using AWS Lambda, Step Functions, SQS, and SNS to support asynchronous backend services</li>
                  <li>Enhanced Java-based microservices and contributed to API documentation using Swagger</li>
                  <li>Developed UI components in Angular and integrated with data-backed APIs for live metrics and dashboards</li>
                  <li>Improved pipeline visibility and reliability by contributing to internal monitoring scripts and alerting setups</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Education</h2>
            </div>

            <div className="card">
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Bachelor of Engineering (Honours)
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">Gyan Ganga College of Technology, Jabalpur</p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">2016 - 2020</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Computer Science Engineering. GPA: 7.62/10
              </p>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                <Code className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Skills</h2>
            </div>

            <div className="card">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-display text-lg font-semibold">Languages & Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Node.js', 'Java', 'Python', 'PySpark'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-lg font-semibold">Cloud & AWS</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Lambda', 'API Gateway', 'DynamoDB', 'S3', 'RDS', 'EC2', 'Step Functions', 'SQS', 'SNS', 'Glue', 'Redshift', 'EMR'].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-accent-100 px-3 py-1 text-sm font-medium text-accent-700 dark:bg-accent-950 dark:text-accent-300"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-lg font-semibold">Frameworks & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Spring Boot', 'Angular', 'NestJS', 'Express', 'Swagger', 'Docker', 'Kubernetes'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-lg font-semibold">DevOps & Monitoring</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Terraform', 'CloudFormation', 'GitHub Actions', 'Jenkins', 'Splunk', 'CloudWatch', 'Prometheus', 'Grafana'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-accent-100 px-3 py-1 text-sm font-medium text-accent-700 dark:bg-accent-950 dark:text-accent-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-600 to-primary-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Certifications</h2>
            </div>

            <div className="space-y-4">
              <div className="card">
                <h3 className="mb-1 font-display text-lg font-semibold">
                  AWS Certified Solutions Architect – Associate
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services</p>
              </div>

              <div className="card">
                <h3 className="mb-1 font-display text-lg font-semibold">
                  AWS Certified Developer – Associate
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services</p>
              </div>

              <div className="card">
                <h3 className="mb-1 font-display text-lg font-semibold">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services</p>
              </div>

              <div className="card">
                <h3 className="mb-1 font-display text-lg font-semibold">
                  Microsoft Certified: Azure Fundamentals
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Microsoft</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

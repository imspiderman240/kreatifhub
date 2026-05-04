import { Briefcase, MapPin, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { JOBS } from '../data';
import { motion } from 'motion/react';

export default function Jobs() {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#f9fafb] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Job Requests</h1>
            <p className="text-gray-500">Project terbaru yang membutuhkan keahlian kreatif Anda.</p>
          </div>
          <Link to="/post-job" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto gap-2">
              <Briefcase size={20} /> Post a Job
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          {JOBS.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 hover:border-[#6366f1] transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-[#6366f1]/10 text-[#6366f1] border-none font-semibold">{job.type}</Badge>
                      <span className="text-gray-400 text-xs flex items-center gap-1 uppercase tracking-wider font-bold">
                        Posted 2 hours ago
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 hover:text-[#6366f1] transition-colors">{job.title}</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" /> {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" /> {job.date}
                      </div>
                      <div className="flex items-center gap-2 font-bold text-[#1a1a1a]">
                        <DollarSign size={16} className="text-[#6366f1]" /> {job.budget}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-48 flex flex-col justify-center items-center gap-3 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-[#f0f0f0] md:pl-8">
                    <Button className="w-full font-bold">Apply Now</Button>
                    <Button variant="ghost" className="w-full text-sm">Save Job</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-white border border-dashed border-[#d1d5db] text-center">
          <p className="text-gray-500 mb-4">Ingin mempekerjakan kreator untuk project Anda?</p>
          <Link to="/post-job">
            <Button variant="secondary" className="gap-2">
              Buka Lowongan <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
